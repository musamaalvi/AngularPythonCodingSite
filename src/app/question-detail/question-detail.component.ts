import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  id: number;
  serverData;
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
      console.log(this.serverData)
    })
  }

}
