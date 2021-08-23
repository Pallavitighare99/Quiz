import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';
import { Detail } from 'src/app/detail';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signupModelForm=new Detail("","","","");

  constructor(private router: Router , private dbService : DatabaseService) { }

  ngOnInit(): void {
  }
  addUser(){
    this.dbService.login(this.signupModelForm);
    
  }
}
  