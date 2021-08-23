import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { QuizChildComponent } from './quiz-child/quiz-child.component';
import { QuizParentComponent } from './quiz-parent/quiz-parent.component';

const routes: Routes = [
    {
        path:'',
        component : QuestionComponent,
        children: [

          {path :'quizLink', component:QuizChildComponent}
           ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaperRoutingModule { }
