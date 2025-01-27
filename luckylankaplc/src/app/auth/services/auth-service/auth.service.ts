import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../storage-service/storage.service';


const BASE_URL = ["http://localhost:8080"];


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }



  register(request : any):Observable<any>{
    return this.http.post(BASE_URL+"/luckylanka/hrandpro/admin/register",request,{
      headers: this.createAuthorizationHeader()
    });
  }

  login(request:any):Observable<any>{

    return this.http.post(BASE_URL+"/luckylanka/hrandpro/auth/authenticate",request);
  }

  logOut(): Observable<any> {

    return this.http.post(BASE_URL + "/luckylanka/hrandpro/auth/logout", {}, {
      headers: this.createAuthorizationHeader()
    });
  }


  createAuthorizationHeader(): HttpHeaders {
    const token = StorageService.getToken(); 
    if (token) {
      return new HttpHeaders({
        'Authorization': 'Bearer ' + token
      });
    } else {
      return new HttpHeaders(); 
    }
  }
}
