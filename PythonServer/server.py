
from flask_jsonpify import jsonify
from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
import sys
from io import StringIO
import contextlib
import json

app = Flask(__name__)
api = Api(app)
app.debug = True
CORS(app)
@app.route("/questions")
def GetQuestions():
     arr = []
     with open('MainPage/main.txt') as f:
          lines = f.readlines()

     for line in lines:
          arr.append(line.strip().split(",")[1])
          arr.append(line.strip().split(",")[0])
     
     return json.dumps(arr)

class Employees(Resource):
    def get(self):
        return {'employees': [{'id':1, 'name':'Balram'},{'id':2, 'name':'Tom'}]} 
class Employees_Name(Resource):
    def get(self, employee_id):
        #print('Employee id:' + employee_id)
        exec(employee_id)
        return jsonify({'some_message':'message'})
     #    result = {'data': {'id':1, 'name':'Balram'}}
    
@app.route('/coderun', methods=['POST'])
def analyzeText():
    if request.method == "POST":
         content = request.get_json()
         temp = content['code']
     #     t = temp.split("\\n")
     #     f = open("demofile.txt", "w") 
     #     for i in  t:
     #          print(i,file=f)
     #     f.close()
         
         
         with stdoutIO() as s:
              exec(temp)

         answer = open("demofile.txt", "r")
         answer = answer.read()
         print(s.getvalue())
         if(answer == s.getvalue()):
              returnValue = True
         else:
              returnValue = False
         return jsonify({'result':returnValue})

@app.route('/questiondesc', methods=['POST'])
def QuestionDescription():
    if request.method == "POST":
         content = request.get_json()
         temp = content['id']
         
         f = open("DetailsPage/"+str(temp)+".txt", "r")
         code = f.read()
         print("MainPage/"+str(temp)+".txt")
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
	 
# exec(usama)