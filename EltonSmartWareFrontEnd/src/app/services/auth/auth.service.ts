import { UserStorageService } from './../../storage/user-storage.service';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const BASIC_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  UserStorageService: any;

  constructor(private http:HttpClient,) {  }
  register(signupRequest:any): Observable <any>{
    return this.http.post(BASIC_URL+"signup",signupRequest)

  }
  login(username:string ,password : string): any{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { username , password};

    return this.http.post(BASIC_URL + 'authenticate',body,{headers,observe: 'response'}).pipe(
    map((res )=> {
      const token  = res.headers.get('authentication').substring(7);
      const user = res.body;
      if(token && user){
        this.UserStorageService.saveToken(token);
        this.UserStorageService.saveUser(token);
        return true;

      }
      return false;
    })
  )
  }
}
