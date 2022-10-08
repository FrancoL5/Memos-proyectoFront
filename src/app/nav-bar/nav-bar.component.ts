import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
	validUser!:boolean

	constructor(private router:Router) {}

	ngOnInit(): void {
		const id: string | null = sessionStorage.getItem('id');
		const validUser: boolean =
			sessionStorage.getItem('validUser') === 'true';
		if (id && validUser) {
      this.validUser = true
		} else {
      this.validUser = false
		}
	}
	logOut (){
		sessionStorage.removeItem("validUser")
		sessionStorage.removeItem("id")
		this.ngOnInit()
		this.router.navigate(['/login'])
	}
}
