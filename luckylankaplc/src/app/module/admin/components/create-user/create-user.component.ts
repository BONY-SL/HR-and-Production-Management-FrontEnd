import { Component } from '@angular/core';
import { user } from '../../../../model/user';
import { AuthService } from '../../../../auth/services/auth-service/auth.service';

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

  showAlert : boolean = false;
  showAlert2 : boolean = false;
  constructor(private authService: AuthService){

  }


  createNewUser() {

    this.user = new user();
    this.user.firstname = this.firstname;
    this.user.lastname = this.lastname;
    this.user.email = this.email;
    this.user.role = this.role;
    this.user.password = this.email;

    if(this.user.firstname === "" || this.user.lastname === "" || this.user.email === "" || this.user.role === ""){
            
      this.showAlert = true;
            setTimeout(() => {
              this.showAlert = false;
            }, 3500);
      return;
    }

    if(!this.isValidEmailAddress(this.user.email)){

      this.showAlert2 = true;
          setTimeout(() => {
        this.showAlert2 = false;
      }, 3500);
      return;
    }

    console.log(this.user);

        const registerRequest={
          "firstname": this.user.firstname,
          "lastname": this.user.lastname,
          "email": this.user.email,
          "password": this.user.email,
          "role": this.user.role,
        }

        this.authService.register(registerRequest).subscribe(
          (response) => {
              console.log(response);
            },
          (error) => {
            console.error(error);
          }
        );
  }

  // Function to validate an email address
  isValidEmailAddress(email: string): boolean {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);

  }

}

