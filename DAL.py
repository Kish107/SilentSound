import pyodbc
import atexit


class Channel(object):
    def __init__(self, conn):
        self._conn = conn

##################### BUG ###########################
    def __init__(self, channel_ID, name, path):
        # self.channel_ID = channel_ID
        self.name = name
        self.path = path
###################################################

class _Channel():
    def __init__(self, conn):
        self._conn = conn

##################### BUG ###########################
    def insert(self, Channel):
        self._conn.execute("""
               INSERT INTO Channel (id, name) VALUES (?, ?)
           """, [student.id, student.name])

###################################################

##################### BUG ###########################
    def __init__(self, channel_ID, name, path):
        # self.channel_ID = channel_ID
        self.name = name
        self.path = path
###################################################

class Record(object):
    def __init__(self, record_ID, channel_ID, start_time, end_time):
        self.record_ID = record_ID
        self.channel_ID = channel_ID
        self.start_time = start_time
        self.end_time = end_time


class _Records():
    def __init__(self, conn):
        self._conn = conn

    def insert(self, channel_id, start_time):
        self._conn.execute("""
               INSERT into record (channel_id, start_time) VALUES (?, ?)
           """, [channel_id, start_time])
        query_data = self._conn.cursor()
        query_data.execute(""" SELECT path from channel where channel_ID = (?)""", [channel_id])

        # the expected value is the first element in the fetched row
        path = query_data.fetchone()[0]
        query_data.execute(""" SELECT IDENT_CURRENT('record')""")
        id = query_data.fetchall()
        return path + "\\" + str(id[0][0])

    # self._conn.execute(""" SELECT IDENT_CURRENT('record')""")

    def update(self, record_ID, end_time):
        self._conn.execute("""
               UPDATE record set [end_time] = (?) where record_ID = (?)
           """, [end_time, record_ID])


class _recordFile():
    def __init__(self, conn):
        self._conn = conn

    def insert(self, record_id, start_time):
        self._conn.execute("""
               INSERT into recordFile (record_id, start_time) VALUES (?, ?)
           """, [record_id, start_time])
        query_data = self._conn.cursor()

        query_data.execute(""" SELECT IDENT_CURRENT('recordFile')""")
        id = query_data.fetchall()
        return str(id[0][0])

    def update(self, recordFile_ID, end_time):
        self._conn.execute("""
               UPDATE recordFile set [end_time] = (?) where record_File_ID = (?)
           """, [end_time, recordFile_ID])


class _recordTag():
    def __init__(self, conn):
        self._conn = conn

##################### SUGGEST ###########################
    def insert(self, record_ID, pars, time_stamp):
        parameter_string = '           ,[{}_par{}]\n'
        insertion_string = '               INSERT INTO [dbo].[recordTag]\n([record_ID]\n'
        for i in range(int(len(pars) / 2)):
            insertion_string += parameter_string.format('algo', str(i + 1))
            insertion_string += parameter_string.format('user', str(i + 1))

        insertion_string += '           ,[time_stamp])\n     VALUES (' + record_ID

        for par in pars:
            insertion_string += '{}, '.format(str(par))

        insertion_string += str(time_stamp) + ')\n           '

        self._conn.execute(insertion_string)

###########################################################

    def getLastTagByChannelId(self, channel_ID):
        mycursor = self._conn.cursor()

        mycursor.execute("""SELECT * from tag_in_channel where channel_ID = (?) order by [time_stamp] desc""",
                         [channel_ID])

        myresult = mycursor.fetchone()

        return myresult


class recordTag():
    def __init__(self, conn):
        self._conn = conn

    def __init__(self, time_stamp, record_tag_ID, record_ID, algo_par1, algo_par2, algo_par3, algo_par4, algo_par5,
                 algo_par6, algo_par7, algo_par8, algo_par9, algo_par10,
                 user_par1, user_par2, user_par3, user_par4, user_par5, user_par6, user_par7, user_par8, user_par9,
                 user_par10):
        self.record_tag_ID = record_tag_ID
        self.record_ID = record_ID
        self.algo_par1 = algo_par1
        self.algo_par2 = algo_par2
        self.algo_par3 = algo_par3
        self.algo_par4 = algo_par4
        self.algo_par5 = algo_par5
        self.algo_par6 = algo_par6
        self.algo_par7 = algo_par7
        self.algo_par8 = algo_par8
        self.algo_par9 = algo_par9
        self.algo_par10 = algo_par10
        self.user_par1 = user_par1
        self.user_par2 = user_par2
        self.user_par3 = user_par3
        self.user_par4 = user_par4
        self.user_par5 = user_par5
        self.user_par6 = user_par6
        self.user_par7 = user_par7
        self.user_par8 = user_par8
        self.user_par9 = user_par9
        self.user_par10 = user_par10
        self.time_stamp = time_stamp


class _Repository(object):
    def __init__(self):
        self._conn = pyodbc.connect('Driver={ODBC Driver 17 for SQL Server};'
                                    'Server=IEWIN7\SqlExpress;'
                                    'Database=psDB;'
                                    'UID=db_user;'
                                    'PWD=Aa123456')
        # self.Channel = _Channel(self._conn)
        self.records = _Records(self._conn)
        self.recordFile = _recordFile(self._conn)
        self.recordTag = _recordTag(self._conn)

    def _close(self):
        self._conn.commit()
        self._conn.close()


# the repository singleton
repo = _Repository()

test = repo.recordTag.getLastTagByChannelId(3)
atexit.register(repo._close)