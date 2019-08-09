from flask import Flask, json, request
import socket
from threading import Thread
import multiprocessing as mp
import time
import wave
import os
import numpy as np
import datetime
from flask_cors import CORS, cross_origin

# Local imports
import model_1
import model_2
import DAL

api = Flask(__name__)
CORS(api)

# Constants
file_len_max = 5  # Maximum length (Minutes) for a record
packets_n = 1000 * 60  # about 60 sec
N_max = packets_n * 64
CAS_fs = 31250  # Hz
sample_width = 2  # bytes
T_max = N_max / sample_width / CAS_fs
NUM_CHANNELS = 5
NUM_PARAMETERS = 10
channel_list = list(range(NUM_CHANNELS))
output_dic_template = dict([('algo_par{}'.format(i + 1), -1.0) for i in range(NUM_PARAMETERS)] +
                           [('algo_par{}_conf'.format(i + 1), 0.0) for i in range(NUM_PARAMETERS)])

# Communication management
data_feed_HOST = '127.0.0.1'  # all available interfaces
data_feed_PORT = 5404  # arbitrary non privileged port

# API status
OK_STATUS = [{'Status': 'OK'}]
N_OK_STATUS = [{'Status': 'Not OK'}]

# Channel recording
channel_recorders = [None for _ in range(NUM_CHANNELS)]
current_record_id = [0 for _ in range(NUM_CHANNELS)]
channel_queues = [mp.Queue() for _ in range(NUM_CHANNELS)]

model_list = [model_1.Model1Runner, model_2.Model2Runner]

''' #################################  ETC  ################################# '''


def get_timestamp():
    return str(datetime.datetime.now()).replace(' ', 'T')


def channel_and_model():
    for channel in range(NUM_CHANNELS):
        for model in model_list:
            yield (channel, model)
#########################################################################


''' #################################  WEB  ################################# '''


@api.route('/GetAllChannels', methods=['GET'])
@cross_origin(origin='*')
def get_all_channels():
    return json.dumps(channel_list)


@api.route('/GetRecordStatus', methods=['GET'])
@cross_origin(origin='*')
def get_record_status():
    channel = int(request.args['Channel'])

    if not channel_recorders[channel]:
        return [{'IsRecording': 'False'}]

    if not channel_recorders[channel].is_alive():
        return [{'IsRecording': 'False'}]

    return json.dumps([{'IsRecording': 'True'}])


@api.route('/GetSummaryPanel', methods=['GET'])
@cross_origin(origin='*')
def get_summary_panel():
    for channel in channel_list:
        repo.recordTag.getLastTagByChannelId(channel)

    return json.dumps(OK_STATUS)


@api.route('/GetModelData', methods=['GET'])
@cross_origin(origin='*')
def get_model_data():
    channel = int(request.args['Channel'])
    return json.dumps(list({str(key): float(model_output_list[channel][key])} for key in model_output_list[channel].keys()))


@api.route('/TagRecording', methods=['POST'])
@cross_origin(origin='*')
def tag_recording():
    RecordID = int(request.args['RecordID'])
    pars = []

    for i in range(NUM_PARAMETERS):
        pars.append(float(request.args['algo_par' + str(i)]))
        pars.append(float(request.args['user_par' + str(i)]))

    repo.recordTag.insert(RecordID, *pars, get_timestamp())
    return json.dumps(OK_STATUS)


@api.route('/StartRecord', methods=['POST'])
@cross_origin(origin='*')
def start_record():

    channel = int(request.args['Channel'])

    # If a recording process is being tracked
    if not channel_recorders[channel]:
        dir_path = repo.records.insert(channel, get_timestamp())
        channel_recorders[channel] = mp.Process(target=write_channel, args=(channel_queues[channel], live_data_list[channel], current_idx_list[channel], dir_path, current_record_id[channel]))
        channel_recorders[channel].start()
        current_record_id[channel] += 1
        return json.dumps(OK_STATUS)

    # If a recording process is dead
    if not channel_recorders[channel].is_alive():
        dir_path = repo.records.insert(channel, get_timestamp())
        channel_recorders[channel] = mp.Process(target=write_channel, args=(channel_queues[channel], live_data_list[channel], current_idx_list[channel], dir_path, current_record_id[channel]))
        channel_recorders[channel].start()
        current_record_id[channel] += 1
        return json.dumps(OK_STATUS)

    # Process already up
    return json.dumps(N_OK_STATUS)


@api.route('/StopRecord', methods=['POST'])
@cross_origin(origin='*')
def stop_record():
    channel = int(request.args['Channel'])

    # Checking if a recording process is existing
    if not channel_recorders[channel]:
        return json.dumps(N_OK_STATUS)

    # Letting the process stop quietly, while relieving the spot for a new recording process
    else:
        channel_queues[channel].put('Stop')
        channel_recorders[channel] = None

    return json.dumps(OK_STATUS)

#########################################################################


def get_meta_message(udp_raw):
    return {'seg_num': udp_raw[4], 'mess_num': int.from_bytes(udp_raw[20:24], 'little'), 'size': len(udp_raw)}


def data_feed(sock):
    while 1:
        seg_raw, add = sock.recvfrom(1400)
        meta = get_meta_message(seg_raw)
        if meta['seg_num'] == 10:
            for i in range(NUM_CHANNELS):
                live_data_list[i][current_idx_list[i].value:current_idx_list[i].value + 64] = seg_raw[872 + i * 64:872 + (i + 1) * 64]
                current_idx_list[i].value += 64
                current_idx_list[i].value %= 64


def write_channel(q, arr, index, dir_path, record_id):
    time.sleep(T_max)
    arr = np.frombuffer(arr, dtype='uint8')
    inner_repo = DAL._Repository()
    os.makedirs(dir_path, exist_ok=True)
    file_num = 0

    while True:

        if not q.empty():

            # User request
            if 'Stop' == q.get():
                inner_repo.records.update(record_id, get_timestamp())
                break

            # Quit after 2 hours
            elif file_num * file_len_max > 120:
                inner_repo.records.update(record_id, get_timestamp())
                break

        wave_file = wave.open(os.path.join(dir_path, '{}.wav'.format(file_num)), "wb")
        wave_file.setparams((1, 2, CAS_fs, 0, 'NONE', 'not compressed'))
        curr_time = time.time()

        for _ in range(file_len_max):
            raw = np.concatenate([arr[index.value:], arr[:index.value]])
            wave_file.writeframesraw(raw)
            curr_time += T_max
            time.sleep(curr_time - time.time())

        wave_file.close()
        file_num += 1


def main():
    # Allocate processes
    model_process = [[] for _ in range(NUM_CHANNELS)]

    # Allocate thread for data feed
    data_feed_thread = Thread(target=data_feed, args=(data_feed_socket,))
    data_feed_thread.start()

    for channel, model in channel_and_model():
        model_process[channel].append(mp.Process(target=model.run, args=(model_output_list[channel], live_data_list[channel], current_idx_list[channel])))
        model_process[channel][-1].start()

    # Run interface with web
    api.run()


if __name__ == '__main__':
    mp.freeze_support()
    repo = DAL._Repository()

    #   shared objects
    manager = mp.Manager()
    live_data_list = [mp.RawArray('b', N_max) for _ in range(NUM_CHANNELS)]
    current_idx_list = [mp.RawValue('i', 0) for _ in range(NUM_CHANNELS)]
    model_output_list = [manager.dict(output_dic_template) for _ in range(NUM_CHANNELS)]

    # _Listen to the stream of data
    data_feed_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM, socket.IPPROTO_UDP)
    data_feed_socket.bind((data_feed_HOST, data_feed_PORT))

    # Run
    main()
