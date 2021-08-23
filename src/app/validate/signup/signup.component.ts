import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
import { Detail } from 'src/app/detail';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupModelForm=new Detail("","","","");

  constructor(private databaseService :DatabaseService) { }

  ngOnInit(): void {
  }
  addUser(){
    
    this.databaseService.saveuser(this.signupModelForm);
    
  }

}
