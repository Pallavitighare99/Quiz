import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { PaperRoutingModule } from './paper-routing.module';
import { QuizParentComponent } from './quiz-parent/quiz-parent.component';
import { QuizChildComponent } from './quiz-child/quiz-child.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    QuestionComponent,
    QuizParentComponent,
    QuizChildComponent
  ],
  imports: [
    CommonModule,
    PaperRoutingModule,
    HttpClientModule
  ]
})
export class PaperModule { }
