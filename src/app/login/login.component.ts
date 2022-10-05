import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../crear-usuario.service';
import {Subscription} from "rxjs"


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnDestroy {
  constructor(private fb: FormBuilder, private Usuario: UsuarioService) {}
  public validPassword: boolean = true;
  public userSubscription!:Subscription;

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
    
    if(this.form.controls['contrasena'].value !== this.form.controls['confirmarContrasena'].value){
      this.validPassword = false
      return
    }
    this.validPassword = true
    
		if (this.form.invalid ) {
			this.form.markAllAsTouched();
			return;
		}
		const {
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
			password,
			country,
			last_name,
		}).subscribe(data => console.log(data))
	}
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
  }
}
