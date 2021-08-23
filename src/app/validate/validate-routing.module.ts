import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {
        path: '',
        component: HeaderComponent,
        children: [
            {path: 'signupLink',component : SignupComponent},
            {path: 'loginLink',component : LoginComponent},
      
          ]

    },
    {
      path : 'questionLink',
      loadChildren: () => import('../paper/paper.module').then((m)=>m.PaperModule)
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidateRoutingModule { }
