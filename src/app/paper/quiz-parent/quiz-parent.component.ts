import { Component, OnInit } from '@angular/core';
import { QuestionData } from 'src/app/question-data';
import { QuizData } from 'src/app/quiz-data';


@Component({
  selector: 'app-quiz-parent',
  templateUrl: './quiz-parent.component.html',
  styleUrls: ['./quiz-parent.component.scss']
})
export class QuizParentComponent implements OnInit {
 
qdata: any=QuestionData;

  constructor() { }

  ngOnInit(): void {
    
  }
  validateAns(qdata: QuestionData){
    
  }

  

}
