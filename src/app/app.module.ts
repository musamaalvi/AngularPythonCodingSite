import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { DataTableModule } from 'primeng/primeng'; 
import { PaginatorModule } from 'primeng/primeng';
import { CategoriesComponent } from './categories/categories.component'; 
@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionDetailComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTableModule, 
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
