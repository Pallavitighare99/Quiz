import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  loggedInUser : any;
  constructor(private dbService : DatabaseService) { }

  ngOnInit(): void {
 
 this.loggedInUser=localStorage.getItem("userName");


  }

  logoutUser()
  {
this.dbService.logout();
  }
 

}
