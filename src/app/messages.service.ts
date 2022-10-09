import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMessage } from './interfaces/IMessages';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http:HttpClient) { }

  private URL: string = "http://localhost:3000/api/users"

  getMessages(id:string, flow:"sent"|"inbox"):Observable<IMessage[]>{
    return this.http.get<IMessage[]>(`${this.URL}/${id}/messages/${flow}`)
  }
}
