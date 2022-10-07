import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './interfaces/IUser';

@Injectable({
  providedIn: 'root'
})


export class UsuarioService {

  private URL: string = "http://localhost:3000"

  constructor(private http:HttpClient) { }
  validateUser(userName:string, password:string):Observable<boolean>{
    return this.http.post<boolean>(`${this.URL}/api/users/${userName}`, { password })
  }
  
  createUser(user: IUser): Observable<string>{
    return this.http.post<string>(this.URL + "/api/createUser",user,{observe:"body"})
  }
}
