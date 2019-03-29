from subprocess import call
import os

ABSOLUTE_PATH = "C:\CodingBat"

def call_angular_service():
    '''
    calls angular service, assumes that node has already been installed on the system
    '''
    os.chdir(ABSOLUTE_PATH)
    call(['ng', 'serve'], shell=True) #run angular application


if __name__ == "__main__":
    call_angular_service()
