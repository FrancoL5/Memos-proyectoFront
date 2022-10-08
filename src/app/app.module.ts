import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SingUpComponent } from './singUp/singUp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

@NgModule({
	declarations: [AppComponent, SingUpComponent, LoginComponent, NavBarComponent, UserprofileComponent],
	imports: [BrowserModule, MatButtonModule, FormsModule, ReactiveFormsModule,MatCardModule, HttpClientModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
