import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  Data;
  categoryId;
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {

    this.route.paramMap.subscribe(params =>{
      this.categoryId = +params.get('id')      
    })
    var obj = {
      id:this.categoryId
    }
    this.httpClient.post('http://127.0.0.1:5002/questions', obj).subscribe(data =>{
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
