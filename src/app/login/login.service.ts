import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isloggedIn: boolean;

  constructor(private hc:HttpClient) { }

  loginUser(userObj):Observable<any>{
    return this.hc.post('/login',userObj);
  }
  logout(){
    localStorage.clear()
    this.isloggedIn=false
  }
}
