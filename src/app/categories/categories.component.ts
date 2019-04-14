import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  Data;
  apiURL="http://127.0.0.1:5002/"
  constructor(private httpClient: HttpClient) {
    this.httpClient.get(this.apiURL+"categories").subscribe(data =>{
      this.Data = data
     
      console.log(data)
      
    })
  }

  ngOnInit() {
  }

}
