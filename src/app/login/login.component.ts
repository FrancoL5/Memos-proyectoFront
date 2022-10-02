import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor() { }

  form: FormGroup = new FormGroup({
    nombre: new FormControl(),
    apellido: new FormControl(),
    nombreUsuario: new FormControl(),
    contrasena: new FormControl(),
    confirmarContrasena: new FormControl(),
    pais: new FormControl(),
    ciudad: new FormControl(),
  })
}
