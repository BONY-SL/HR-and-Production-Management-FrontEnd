import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../services/storage-service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  email: string = '';
  password: string = '';
  showAlert: boolean = false; // Controls the alert visibility
  showAlert2: boolean = false; // Controls the alert visibility

  constructor(private authService:AuthService,private router:Router,private fb:FormBuilder) {}

  ngOnInit(): void {
      
    
  }

  loginTo() {


    // Show alert if email or password is empty
    if (this.email.trim() === '' || this.password.trim() === '') {
      this.showAlert = true;
      return;
    }

    // Hide alert if email and password are provided
    this.showAlert = false;

    const loginRequest = {
      email: this.email,
      password: this.password
    };
    

    this.authService.login(loginRequest).subscribe(
      (response) => {
        if (response.userId != null) {
          console.log(response);

          const user = {
            id: response.userId,
            role: response.userRole
          };
          StorageService.saveUser(user);
          StorageService.saveToken(response.access_token);

          if (StorageService.isAdminLoggedIn()) {
            this.router.navigateByUrl("/admin/dashboard-admin");
          } else {
            console.log("Bad Credentials");
          }
        } else {
          console.log("Bad Credentials");
        }
      },
      (error) => {
        console.error(error);
        this.showAlert2 = true;
      }
    );
  }
}
