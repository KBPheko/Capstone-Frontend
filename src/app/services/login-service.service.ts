import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor( public _http: HttpClient) { }

  signIn(login: any):Observable<string> {
    return this._http.post("http://localhost:8080/login/signIn",login, {responseType: 'text'});
  }

  createProfile(login: any):Observable<string> {
    return this._http.post("http://localhost:8080/login/createProfile", login, {responseType: 'text'});
  }
}
