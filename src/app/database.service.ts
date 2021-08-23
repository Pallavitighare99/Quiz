import { HttpClient } from '@angular/common/http';
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Detail } from './detail';
import { Score } from './score';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private  http: HttpClient, private router : Router) { }
  saveuser(user : Detail){
    let body:any =  user; 
    let d = new Date();
    let hostUrl = 'http://localhost:3000/Data?v='+d.toLocaleTimeString();
   this.http.post<Detail>(hostUrl, body).subscribe(responseData    => {
      
    this.router.navigate(['/loginLink']);
    }
    
    ); 
  }
  saveScore(score : any)  : any{
    let userName =  localStorage.getItem("userName");
    let data = new Score(score,userName);
    let body:any =  data; 
    let d = new Date();
    let hostUrl = 'http://localhost:3000/Score?v='+d.toLocaleTimeString();
    return this.http.post(hostUrl, body);

  }


//
getScore() : any
{
  let d = new Date();
  let hostUrl = 'http://localhost:3000/Score?v='+d.toLocaleTimeString();
  return this.http.get(hostUrl);

}


//This is a login function - Here we are passing email and password 
// which is emtered on Login FOrm

  login(sData : Detail){

    let d = new Date();
    let hostUrl = 'http://localhost:3000/Data?v='+d.toLocaleTimeString();
     this.http.get<Detail[]>(hostUrl).subscribe((data ) =>
     {

      let userList : Detail[];
      let uData : Detail;
      let userExist= false;


      userList = data;
      for(var i = 0 ; i <userList.length; i++)
      {
        uData =  userList[i];
        console.log(uData.userName + " --- "+uData.password);

        if(sData.email == uData.email)
        {
          if(sData.password == uData.password)
          {
            
          localStorage.setItem("userName", uData.userName);
          localStorage.setItem("email",uData.email);
          this.router.navigate(['/questionLink/quizLink'])
          userExist=true;
          }
          else
          {
            alert(" Invalid User Name or Password");
            return;
          }

        } 

        
      }
      if(userExist==false){
        alert("user does not exist please signup");
        
      }
     })

    
  }

  logout()
  {
    localStorage.setItem("userName", "");
    localStorage.setItem("email","");
    this.router.navigate(['/loginLink']);
  }

  validateUser()
  {
   

  }
}
