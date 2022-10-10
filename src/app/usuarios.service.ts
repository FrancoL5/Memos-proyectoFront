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
  validateUser(userName:string, password:string):Observable<{validate:boolean, id:string}>{
    return this.http.post<{validate:boolean, id:string}>(`${this.URL}/api/users/${userName}`, { password })
  }
  
  createUser(user: IUser): Observable<any>{
    return this.http.post<any>(this.URL + "/api/createUser",user,{observe:"body"})
  }

  getID(userName:string):Observable<string>{
    return this.http.get<string>(`${this.URL}/api/usersID/${userName}`)
  }

  getUsers(userName:string|"ALL"):Observable<{user_name:string}[]>{
    return this.http.get<{user_name:string}[]>(`${this.URL}/api/${userName}`)
  }
}
