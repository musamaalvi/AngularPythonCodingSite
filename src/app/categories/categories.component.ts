import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  Data;
  constructor(private httpClient: HttpClient) {
    this.httpClient.get('http://127.0.0.1:5002/categories').subscribe(data =>{
      this.Data = data
     
      console.log(data)
      
    })
  }

  ngOnInit() {
  }

}
