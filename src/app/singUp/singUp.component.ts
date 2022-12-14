import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../usuarios.service';
import { Subscription } from 'rxjs';
import * as bcrypt from 'bcryptjs';
import { Router } from '@angular/router';

@Component({
	selector: 'app-singUp',
	templateUrl: './singUp.component.html',
	styleUrls: ['./singUp.component.css'],
})
export class SingUpComponent implements OnDestroy {
	constructor(private fb: FormBuilder, private Usuario: UsuarioService, private router:Router) {}
	public validPassword: boolean = true;
	public userSubscription!: Subscription;

	form: FormGroup = this.fb.group({
		nombre: [, [Validators.required]],
		apellido: [, [Validators.required]],
		nombreUsuario: [, [Validators.required]],
		contrasena: [, [Validators.required]],
		confirmarContrasena: [, [Validators.required]],
		pais: [, [Validators.required]],
		ciudad: [, [Validators.required]],
	});
	enviarDatos() {
		// user_name: userName,
		//     name,
		//     last_name: lastName,
		//     country,
		//     city,
		//     password,

		if (
			this.form.controls['contrasena'].value !==
			this.form.controls['confirmarContrasena'].value
		) {
			this.validPassword = false;
			return;
		}
		this.validPassword = true;

		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}
		let {
			nombre: name,
			ciudad: city,
			nombreUsuario: user_name,
			contrasena: password,
			pais: country,
			apellido: last_name,
		} = this.form.value;

		this.userSubscription = this.Usuario.createUser({
			name,
			city,
			user_name,
			password: bcrypt.hashSync(password, 10),
			country,
			last_name,
		}).subscribe((user) => {
			sessionStorage.setItem("validUser", "true")
			sessionStorage.setItem('id', user.user_id)
			sessionStorage.setItem('userName', user.user_name)
			this.router.navigate(['/user']).then(()=>{
				window.location.reload();
			})
		});

	}
	ngOnDestroy(): void {
		this.userSubscription.unsubscribe();
	}
}
