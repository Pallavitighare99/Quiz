import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionData } from 'src/app/question-data';
import { QuizData } from 'src/app/quiz-data';
import { environment } from 'src/environments/environment';
import { DatabaseService } from 'src/app/database.service';
import { Score } from 'src/app/score';

@Component({
  selector: 'app-quiz-child',
  templateUrl: './quiz-child.component.html',
  styleUrls: ['./quiz-child.component.scss']
})
export class QuizChildComponent implements OnInit {
  url=environment.quizUrl;
  quizs=['quiz'];
  quizQuestionList:QuestionData[]=[];
  randomQuestion:QuizData[]=[];
  quizCategory:string="quiz";
  topScoreList : Score[] =[];
  

  option1Bg ="none";
  option2Bg ="none";
  option3Bg ="none";
  option4Bg ="none";

  quizStartFlag=false;
  quizCompleteFlag=false;
  currentIndex=0;

  finalAns ="none";
  userScore=0;
  answerSelectedFlag = false;
  showPlayButtonFlag=true;

  @Input()
  qdata : any= QuestionData;
  @Output()
  notify : any= new EventEmitter();

  constructor(private http: HttpClient, private dbService : DatabaseService) { }

  ngOnInit(): void {
    this.startQuiz();
  }
  
  startQuiz(){
    console.log(this.url);
    const url1=`${this.url}`;
    console.log(url1);
    this.http.get<QuizData>(url1).subscribe(data=>{
      //this.randomQuestion=data['questions']['quiz']
      console.log(data.questions.quiz);
     const shuffle= this.sortQuestion(data.questions.quiz);

     shuffle.forEach(q=>{this.quizQuestionList.push(q)});
      for(var i=0;i<this.quizQuestionList.length;i++)
      {
        console.log(this.quizQuestionList[i].question )
        this.qdata=this.quizQuestionList[i].question ;
      }

    });
  }
  sortQuestion(list: any[]){
    return list.sort(()=> Math.random( )- 0.5);
    
  }
  displayNextQuestion(i:any){
    //alert(this.quizQuestionList.length);
    if(i<this.quizQuestionList.length)
    {
      this.qdata=this.quizQuestionList[i];
    this.quizStartFlag=true;
    this.quizCompleteFlag=false;
  
    }
    else{
      this.quizCompleteFlag=true;
      this.quizStartFlag=false;
      this.dbService.saveScore(this.userScore).subscribe( () =>
      {

       // alert("  Score Saved .. ");

        this.dbService.getScore().subscribe((p : Score[]) => {
          console.log("Score Received....");
          //p.sort();
        this.topScoreList = p.sort(function(a,b){ 
          return b.score - a.score;
         });
        })

      })
    }
    

}
nextQuestion(){
  this.displayNextQuestion(this.currentIndex);
  this.currentIndex++;


}
playQuiz(){
  this.reset();
  this.nextQuestion();
  this.showPlayButtonFlag=false;

}
reset(){
  
  this.option1Bg ="white";
  this.option2Bg ="white";
  this.option3Bg ="white";
  this.option4Bg ="white";

}

submitAnsOption1(answer : any)
{
  //alert(answer);
  this.answerSelectedFlag = true;
  this.qdata.userOption = answer;
  this.option1Bg = "gold";
  
 
 this.option2Bg ="white";
 this.option3Bg ="white";
 this.option4Bg ="white";


  this.finalAns = "option1Bg";
}
  submitAnsOption2(answer : any)
{
  //alert(answer);
  this.answerSelectedFlag = true;
  this.qdata.userOption = answer;
  this.option2Bg = "gold";
  this.option1Bg ="white";
 
  this. option3Bg ="white";
  this. option4Bg ="white";
  this.finalAns = "option2Bg";
}

submitAnsOption3(answer : any)
{
  //alert(answer);
  this.answerSelectedFlag = true;
  this.qdata.userOption = answer;
  this.option3Bg = "gold";
  this.option1Bg ="white";
  this. option2Bg ="white";
 
  this. option4Bg ="white";
  this.finalAns = "option3Bg";
}

submitAnsOption4(answer : any)
{
  //alert(answer);
  this.answerSelectedFlag = true;
  this.qdata.userOption = answer;
  this.option4Bg = "gold";
  this.option1Bg ="white";
  this. option2Bg ="white";
  this. option3Bg ="white";
   
  this.finalAns = "option4Bg";
}


validateAns()
{
  this.notify.emit(this.qdata);
    if(this.qdata.userOption == this.qdata.correctOption)
    {
      this.userScore=this.userScore+20;
      if(this.finalAns == 'option1Bg')
      { 
        this.option1Bg = "green";

      }
      if(this.finalAns == 'option2Bg')
      { 
        this.option2Bg = "green";

      }
      if(this.finalAns == 'option3Bg')
      { 
        this.option3Bg = "green";

      }
      if(this.finalAns == 'option4Bg')
      { 
        this.option4Bg = "green";

      }
      
    }
    else{

      if(this.finalAns == 'option1Bg')
      { 
        this.option1Bg = "red";

      }
      if(this.finalAns == 'option2Bg')
      { 
        this.option2Bg = "red";

      }
      if(this.finalAns == 'option3Bg')
      { 
        this.option3Bg = "red";

      }
      if(this.finalAns == 'option4Bg')
      { 
        this.option4Bg = "red";

      }
      this.highlightCorrect();
      

    }

}
highlightCorrect(){
  if(this.qdata.correctOption==this.qdata.option1){
    this.option1Bg="green"
  }
  if(this.qdata.correctOption==this.qdata.option2){
    this.option2Bg="green"
  }
  if(this.qdata.correctOption==this.qdata.option3){
    this.option3Bg="green"
  }
  if(this.qdata.correctOption==this.qdata.option4){
    this.option4Bg="green"
  }
  
}
replay(){
  this.quizStartFlag=false;
  this.quizCompleteFlag=false;
  this.currentIndex=0;

  this.finalAns ="none";
  this.userScore=0;


  this.answerSelectedFlag = false;
  this.reset();
  this.showPlayButtonFlag=true;
}
next(){
  this.reset();
  this.nextQuestion();
}
}

