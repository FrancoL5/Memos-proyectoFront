import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingUpComponent } from './singUp/singUp.component';
import { SendMessagesComponent } from './userprofile/send-messages/send-messages.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  { path: 'singup', component: SingUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserprofileComponent },
  { path: 'user/sendMessage', component: SendMessagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }