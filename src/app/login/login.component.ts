import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../usuarios.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private fb: FormBuilder, private Usuario: UsuarioService) { }
  form: FormGroup = this.fb.group({
		nombreUsuario: [, [Validators.required]],
    contrasena: [,[Validators.required]]
	});


  login(){
    this.Usuario.validateUser(this.form.controls["nombreUsuario"].value,this.form.controls["contrasena"].value)
  }
}
