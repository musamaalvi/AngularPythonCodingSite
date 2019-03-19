import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { AppComponent } from './app.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [{path:'', component:CategoriesComponent},
{path:'questions/:id', component:QuestionsComponent},
{path:'questiondetail/:id',component:QuestionDetailComponent},
{path:'questiondetail/:id/:id2',component:QuestionDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
