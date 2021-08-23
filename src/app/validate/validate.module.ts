import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateRoutingModule } from './validate-routing.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ValidateRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ValidateModule { }
