import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  Data;
  constructor(private httpClient: HttpClient) {
    this.httpClient.get('http://127.0.0.1:5002/questions').subscribe(data =>{
      this.Data = data
     
      console.log(data)
      
    })
  }

  QuestionClicked(question){
    
  }

  callingServer(){

  }
  ngOnInit() {
  }

}
