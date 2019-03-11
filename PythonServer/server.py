import sys
import contextlib
import json
from io import StringIO
from flask_jsonpify import jsonify
from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from sys import version


app = Flask(__name__)
api = Api(app)
app.debug = True
CORS(app)

@app.route('/fortestingpurpose', methods=['POST'])
def testingpurpose():
    f = open("TestCasesCode/10003.txt", encoding='utf-8')
    line = f.readline()
    while line:
        print(line)
        line = f.readline()
    return jsonify({'result':'testing'})


@app.route('/solutioncode', methods=['POST'])
def SolutionCode():
    if request.method == "POST":
        content = request.get_json()
        idForQues = content['id']
        f = open("SolutionCode/" + str(idForQues) + ".txt")
        return jsonify({'result' : f.read()})


@app.route('/testcasescoderun', methods=['POST'])
def testCasesCodeRun():
    output = None
    if request.method == "POST":
        content = request.get_json()
        temp = content['code']
        file_handle = open("TestCasesCode/" +str(content['id'])+".txt")
        additionalCode = file_handle.readline()
        answerFile = open("Code/"+str(content['id'])+".txt", "r")
        returnObj = []
        error_code = ""
        while additionalCode:
            codetorun = str(temp)+"\n"+"value=" +additionalCode
            with stdoutIO() as s:
                try:
                    exec(codetorun)
                except Exception as exp:
                    error_code = exp
            answer = answerFile.readline()
            local_environ = locals()
            returnValue = (answer[:-1] ==  str(local_environ['value']))
            text = additionalCode + "|" + answer + "|" + str(local_environ['value']) + "|" + str(returnValue)
            returnObj.append(text)
            additionalCode = file_handle.readline()
        output = jsonify({'result':returnObj})
        return output

@app.route("/questions")
def GetQuestions():
    arr = []
    with open('MainPage/main.txt', encoding='utf-8') as f:
        lines = f.readlines()
    for line in lines:
        arr.append(line.strip().split(",")[1])
        arr.append(line.strip().split(",")[0])
    return json.dumps(arr)


class Employees(Resource):
    def get(self):
        return {'employees': [{'id':1, 'name':'Balram'}, {'id':2, 'name':'Tom'}]}


class Employees_Name(Resource):
    def get(self, employee_id):
        exec(employee_id)
        return jsonify({'some_message':'message'})


@app.route('/coderun', methods=['POST'])
def analyzeText():
    """
    missing docstring: what is the function supposed to do, what does the function return?
    """
    if request.method == "POST":
        content = request.get_json()
        temp = content['code']
        error_code = ""
        with stdoutIO() as s:
            try:
                exec(temp)
            except Exception as exp:
                error_code = exp
        answer = open("Code/"+str(content['id'])+".txt", "r", encoding='utf-8')
        answer = answer.read()
        print(error_code)
        returnValue = (answer == s.getValue())
        if error_code == "":
            error_code = returnValue
        return jsonify({'result':str(error_code)})

import json
@app.route('/questiondesc', methods=['POST'])
def QuestionDescription():
    """
    missing docstring: what is this function supposed to do, what does the function return?
    """
    if request.method == "POST":
        content = request.get_json()
        temp = content['id']
        f = open("DetailsPage/"+str(temp)+".txt", "r", encoding='utf-8')
        code = f.read()
        print("MainPage/{}.txt".format(str(temp)))
        print(code)
        return jsonify({'some_message':code})


@contextlib.contextmanager
def stdoutIO(stdout=None):
    old = sys.stdout
    if stdout is None:
        stdout = StringIO()
    sys.stdout = stdout
    yield stdout
    sys.stdout = old

api.add_resource(Employees, '/employees') # Route_1
api.add_resource(Employees_Name, '/employees/<employee_id>') # Route_3

if __name__ == '__main__':
    app.run(port=5002)
