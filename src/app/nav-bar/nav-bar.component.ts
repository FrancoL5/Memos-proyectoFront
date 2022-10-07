import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuarios.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  constructor(private user:UsuarioService) { }

  ngOnInit(): void {
    const id:string|null = sessionStorage.getItem("id")
    const validUser:boolean = sessionStorage.getItem("validUser") === "true"
    if(id && validUser){
      this.userLogged = true
    }else{
      this.userLogged = false
    }
  }

  userLogged!:boolean

}
