import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { strictEqual } from 'assert';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css',
  "../../../node_modules/primeng/resources/themes/nova-light/theme.css",
  "../../../node_modules/primeng/resources/primeng.min.css",
  "../../../node_modules/primeicons/primeicons.css",
]
})

export class QuestionDetailComponent implements OnInit {
  id: number;
  serverData;
  isLoaded = false
  isAnswered = false
  codeResult=""
  ShowSolution=false;  
  ErrorOcurred=false;
  error=""
  SH = ""
  @ViewChild('pythonCode') textBox;
 
  NextQuestion(){
    window.location.href = window.location.origin + "/questiondetail/"+(this.id+1);
  }
  PrevQuestion(){
    window.location.href = window.location.origin + "/questiondetail/"+(this.id-1);
  }
  fetchSolution(paragraph){
    var obj = {
      id: this.id
    }
    this.httpClient.post('http://127.0.0.1:5002/solutioncode', obj).subscribe(data => {
      paragraph.innerText = data['result']
    })
  }
  RunCode(pythonCode){
    var code = pythonCode.value;
    var obj = {
      id: this.id,
      code: pythonCode.value
    }

    this.httpClient.post('http://127.0.0.1:5002/testcasescoderun', obj).subscribe(data => {
      this.codeResult = data['result']
      if(data['Error']==true){
        this.ErrorOcurred=true;
        this.isAnswered = false
        this.error = data['error_code']
      }
      else{
        this.ErrorOcurred=false;
        this.isAnswered = true
      }
        
    })
  }

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
    
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
    });

    var obj = {
      id:this.id
    }
    this.httpClient.post('http://127.0.0.1:5002/questiondesc', obj).subscribe(data => {
      this.serverData = data
      this.isLoaded = true
      this.textBox.nativeElement.innerHTML = (this.serverData['some_message'].split('|')[1])+"\n    "
      console.log(this.serverData)
      if(data["ShowSolution"]==true){
        this.ShowSolution = data["ShowSolution"]
        this.SH="Solution"
      }
      else if(data["ShowHint"]==true){
        this.ShowSolution = true
        this.SH="Hint"
      }
      else
        this.ShowSolution=false
      
    })
  }

}
