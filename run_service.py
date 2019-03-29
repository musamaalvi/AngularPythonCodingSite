from subprocess import call

ABSOLUTE_PATH = 'C:\\CodingBat\\'

def call_angular_service():
    '''
    calls angular service, assumes that node has already been installed on the system
    '''
    call(['cd', ABSOLUTE_PATH], shell=True) #navigate to current directory
    call(['ng', 'serve'], shell=True) #run angular application


if __name__ == "__main__":
    call_angular_service()
