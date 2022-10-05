import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SingUpComponent } from './singUp/singUp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component'

@NgModule({
	declarations: [AppComponent, SingUpComponent, LoginComponent],
	imports: [BrowserModule, MatButtonModule, FormsModule, ReactiveFormsModule,MatCardModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
