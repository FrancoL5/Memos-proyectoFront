import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
	declarations: [AppComponent, LoginComponent],
	imports: [BrowserModule, MatButtonModule, FormsModule, ReactiveFormsModule,MatCardModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
