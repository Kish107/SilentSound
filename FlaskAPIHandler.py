from flask import Flask, json, request

NUM_CHANNELS = 5
companies = [{"id": 1, "name": "Company One"}, {"id": 2, "name": "Company Two"}]
is_recording      = [False for _ in range(NUM_CHANNELS)]
OK_STATUS      = [{'Status': 'OK'}]
N_OK_STATUS    = [{'Status': 'Not OK'}]

model_output_list = [str(0.8) for _ in range(NUM_CHANNELS)]
channel_queues     = []
api = Flask(__name__)

################################  WEB  #################################
@api.route('/GetAllChannels', methods=['GET'])
def get_all_channels():
   ### Fill DB Module###
    return json.dumps(OK_STATUS)


@api.route('/GetRecordStatus', methods=['GET'])
def get_record_status():
    channel = int(request.args['Channel'])
    isChannelRecording = [{'IsRecording': is_recording[channel]}]
    return json.dumps(isChannelRecording)


@api.route('/GetSummaryPanel', methods=['GET'])
def get_summary_panel():
    ### Fill DB Module###
    return json.dumps(OK_STATUS)


@api.route('/GetModelData', methods=['GET'])
def get_model_data():
    channel = int(request.args['Channel'])
    return json.dumps(model_output_list[channel])


@api.route('/TagRecording', methods=['POST'])
def tag_recording():
    ### Fill DB Module###
    return json.dumps(OK_STATUS)

@api.route('/StartRecord', methods=['POST'])
def start_record():
    channel = int(request.args['Channel'])

    if is_recording[channel]:
        return json.dumps(N_OK_STATUS)

    channel_queues[channel].put('Start')
    ### Fill DB Module###
    channel_queues[channel].put()
    return json.dumps(OK_STATUS)


@api.route('/StopRecord', methods=['POST'])
def stop_record():
    channel = int(request.args['Channel'])

    if not is_recording[channel]:
        return json.dumps(N_OK_STATUS)

    channel_queues[channel].put('Stop')
    return json.dumps(OK_STATUS)

############################################################################

if __name__ == '__main__':
    api.run()
