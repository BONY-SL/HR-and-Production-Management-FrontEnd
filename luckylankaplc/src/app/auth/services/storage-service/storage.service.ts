import { Injectable } from '@angular/core';


const TOKEN = "token";
const RefreshToken = "refreshToken";
const USER ="user";



@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  static saveToken(token:string):void{

    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN,token);

  }


  static saveUser(user:any):void{

    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER,JSON.stringify(user));

  }


  static getToken(): string | null {
    return window.localStorage.getItem(TOKEN);
  }

  static getUser(): any {
    const user = window.localStorage.getItem(USER);
    return user ? JSON.parse(user) : null;
  }

  static getUserId():string {

    const user = this.getUser();
    if(user == null)  return '';
    return user.id;

  }

  static getUserRole():string{
    const user = this.getUser();

    if(user == null) return "";
    return user.role;
  }


  static isAdminLoggedIn():boolean {

    if (this.getToken() == null) return false;

    const role: string = this.getUserRole();
    return role == "ADMIN";
  }


  static isHrManagerLoggedIn():boolean {

    if (this.getToken() == null) return false;

    const role: string = this.getUserRole();
    return role == "HR_MANAGER";
  }



  static isACCOUNTANTLoggedIn():boolean {

    if (this.getToken() == null) return false;

    const role: string = this.getUserRole();
    return role == "ACCOUNTANT";
  }



  static isPRODUCTION_MANAGERLoggedIn():boolean {

    if (this.getToken() == null) return false;

    const role: string = this.getUserRole();
    return role == "PRODUCTION_MANAGER";
  }


  static isSTORE_KEEPERLoggedIn():boolean {

    if (this.getToken() == null) return false;

    const role: string = this.getUserRole();
    return role == "STORE_KEEPER";
  }

  static logOut():void{

    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);

  }

}
