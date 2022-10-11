import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SingUpComponent } from './singUp/singUp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { MatTableModule } from '@angular/material/table';
import { SendMessagesComponent } from './userprofile/send-messages/send-messages.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
	declarations: [
		AppComponent,
		SingUpComponent,
		LoginComponent,
		NavBarComponent,
		UserprofileComponent,
		SendMessagesComponent,
	],
	imports: [
		BrowserModule,
		MatButtonModule,
		FormsModule,
		ReactiveFormsModule,
		MatCardModule,
		HttpClientModule,
		AppRoutingModule,
		MatTableModule,
		MatFormFieldModule,
		MatSelectModule,
		BrowserAnimationsModule,
		MatListModule,
		MatInputModule,
		MatExpansionModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
