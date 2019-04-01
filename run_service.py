from subprocess import Popen, call
import os

ABSOLUTE_PATH = "C:\CodingBat"

def call_angular_service():
    '''
    calls angular service, assumes that node has already been installed on the system
    '''
    os.chdir(ABSOLUTE_PATH)
    Popen("ng serve", shell = True)
    os.chdir('PythonServer')
    Popen('python server.py', shell=True)
    while True:
        pass
    #call(['python', 'PythonServer\\server.py'], shell=True)

if __name__ == "__main__":
    call_angular_service()
