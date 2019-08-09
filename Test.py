from threading import Thread
import wave
import numpy as np
import multiprocessing as mp
import socket
import time
import os

# Constants
file_len_max = 5  # Maximum length (Minutes) for a record
packets_n = 1000 * 60  # about 60 sec
N_max = packets_n * 64
CAS_fs = 31250  # Hz
sampwidth = 2  # bytes
T_max = N_max / sampwidth / CAS_fs
NUM_CHANNELS = 5
NUM_PARAMETERS = 10
channel_list = list(range(NUM_CHANNELS))
output_dic_template = dict([('algo_par{}'.format(i + 1), -1.0) for i in range(NUM_PARAMETERS)] +
                           [('algo_par{}_conf'.format(i + 1), 0.0) for i in range(NUM_PARAMETERS)])

# Communication management
data_feed_HOST = '127.0.0.1'  # all available interfaces
data_feed_PORT = 5404  # arbitrary non privileged port


def packets_generator(dir_name, segment_size=1400):
    packets = bytes(0)
    for f in os.listdir(dir_name):
        with open(os.path.join(dir_name, f), 'rb') as rec:
            packets = packets + rec.read()
    i = 0
    while True:
        yield packets[i:i+segment_size]
        i += segment_size
        i = i % len(packets)


def manfiz():
    max_minutes = 2
    UDP_IP = "127.0.0.1"
    UDP_PORT = 5404
    sock_t = socket.socket(socket.AF_INET, socket.SOCK_DGRAM, socket.IPPROTO_UDP)
    packets_gen = packets_generator('data')
    message_T = 0.001024
    segments_per_message = 10
    segment_T = message_T / segments_per_message
    start_time = time.time()
    end_time = start_time + max_minutes*60
    curr_send_time = start_time
    print_time = 1
    while curr_send_time < end_time:
        if curr_send_time - start_time > print_time:
            print('time from start: real={} - alleged={}'.format(time.time() - start_time, curr_send_time - start_time))
            print_time += 1
        sock_t.sendto(next(packets_gen), (UDP_IP, UDP_PORT))
        curr_send_time += segment_T
        try:
            time.sleep(curr_send_time - time.time())
        except:
            pass

def get_meta_message(udp_raw):
    ret = {}
    ret['seg_num'] = udp_raw[4]
    ret['mess_num'] = int.from_bytes(udp_raw[20:24], 'little')
    ret['size'] = len(udp_raw)
    return ret


def data_feed(data_feed_socket):
    while 1:
        seg_raw, add = data_feed_socket.recvfrom(1400)
        meta = get_meta_message(seg_raw)
        if meta['seg_num'] == 10:
            for channel in range(NUM_CHANNELS):
                live_data_list[channel][current_idx_list[channel].value:current_idx_list[channel].value + 64] = seg_raw[872 + i * 64:872 + (i + 1) * 64]
                current_idx_list[channel].value += 64
                current_idx_list[channel].value %= 64


def writeChannel(arr, index, dir_path, record_id):
    time.sleep(T_max)
    os.makedirs(dir_path, exist_ok=True)
    file_num = 0

    while True:

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
    data_feed_thread = Thread(target=data_feed, args=(data_feed_socket,))
    data_feed_thread.start()

    channel_recorder = mp.Process(target=writeChannel, args=(live_data_list[1], current_idx_list[1], r'D:\PycharmProjects\SilentSound\shit', '1'))
    channel_recorder.start()

    man = mp.Process(target=manfiz, args=())
    man.start()

if __name__ == '__main__':
    mp.freeze_support()

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