from subprocess import call


def call_angular_service():
    '''
    calls angular service, assumes that node has already been installed on the system
    '''
    call(['ng', 'serve'], shell=True)


if __name__ == "__main__":
    call_angular_service()
