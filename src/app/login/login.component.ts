import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuarios.service';
import { Subscription } from 'rxjs';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnDestroy {
  loginSubscription!:Subscription

   validUser!:boolean


	constructor(private fb: FormBuilder, private Usuario: UsuarioService, private router:Router) {}



	form: FormGroup = this.fb.group({
		nombreUsuario: [, [Validators.required]],
		contrasena: [, [Validators.required]],
	});

	login() {
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}
    const userName = this.form.controls['nombreUsuario'].value
		this.loginSubscription = this.Usuario.validateUser(
			this.form.controls['nombreUsuario'].value,
			this.form.controls['contrasena'].value
		).subscribe((valid) => {
			if(valid){
				sessionStorage.setItem('validUser', String(valid));
				sessionStorage.setItem('id', userName);
				this.router.navigate(['/user']).then(()=>{
					window.location.reload();
				})
			}
			this.validUser = !valid
			this.form.reset()
		});
	}

  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe()
  }
}
