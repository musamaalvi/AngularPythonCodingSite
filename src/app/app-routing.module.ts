import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { AppComponent } from './app.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';

const routes: Routes = [{path:'', component:QuestionsComponent},
{path:'questiondetail/:id',component:QuestionDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
