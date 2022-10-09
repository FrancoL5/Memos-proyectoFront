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
	loginSubscription!: Subscription;
	getIDSubscription!: Subscription;
	validUser!: boolean;

	constructor(
		private fb: FormBuilder,
		private Usuario: UsuarioService,
		private router: Router
	) {}

	form: FormGroup = this.fb.group({
		nombreUsuario: [, [Validators.required]],
		contrasena: [, [Validators.required]],
	});

	login() {
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}
		const userName = this.form.controls['nombreUsuario'].value;

		this.loginSubscription = this.Usuario.validateUser(
			userName,
			this.form.controls['contrasena'].value
		).subscribe((data) => {
			if (data) {
				sessionStorage.setItem('validUser', String(data.validate));
				sessionStorage.setItem('userName', userName);
				sessionStorage.setItem('id', data.id);
				this.router.navigate(['/user']).then(() => {
					window.location.reload();
				});
			}

			this.validUser = !data.validate;
			this.form.reset();
		});
	}

	ngOnDestroy(): void {
		this.loginSubscription.unsubscribe();
	}
}
