import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  Data;
  categoryId;
  apiURL="http://127.0.0.1:5002/"
  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private router: Router) {

    this.route.paramMap.subscribe(params =>{
      this.categoryId = +params.get('id')      
    })
    var obj = {
      id:this.categoryId
    }
    this.httpClient.post(this.apiURL+'questions', obj).subscribe(data =>{
      this.Data = data
     
      console.log(data)
      
    })
  }
  BacktoCategories(){
    //window.location.href = window.location.origin;
    this.router.navigateByUrl('/');
  }
  QuestionClicked(question){
    
  }

  callingServer(){

  }
  ngOnInit() {
  }

}
