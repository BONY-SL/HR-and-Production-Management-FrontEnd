import { Component } from '@angular/core';
import { user } from '../../../../model/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {


  firstname = "";
  lastname = "";
  email = "";
  role = "";

  private user! : user;

  constructor(){

  }


  createNewUser() {

    this.user = new user();
    this.user.firstname = this.firstname;
    this.user.lastname = this.lastname;
    this.user.email = this.email;
    this.user.role = this.role;
    this.user.password = this.email;

    console.log(this.user)
    
  }

}
