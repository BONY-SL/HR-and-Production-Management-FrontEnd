import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../../../auth/services/storage-service/storage.service';
import { Observable } from 'rxjs';

const BASE_URL = ["http://localhost:8080"];

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private http : HttpClient) { }

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
    

  getUsers() : Observable<any>{

    return this.http.get(BASE_URL + "/luckylanka/hrandpro/admin/getusers",{
      headers: this.createAuthorizationHeader()
    }); 
  }
}
