import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './interfaces/IUser';
@Injectable({
  providedIn: 'root'
})


export class UsuarioService {

  private URL: string = "http://localhost:3000/api/createUser"

  constructor(private http:HttpClient) { }

  createUser(user: IUser): Observable<IUser>{
    return this.http.post<IUser>(this.URL,user,{observe:"body"})
  }
}
