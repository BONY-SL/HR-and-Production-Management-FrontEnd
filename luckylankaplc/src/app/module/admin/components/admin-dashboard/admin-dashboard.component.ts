import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../../auth/services/storage-service/storage.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../auth/services/auth-service/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent{


  constructor(private router : Router,private authService : AuthService) {

  }

  async logOut() {

    this.authService.logOut().subscribe({
      next: (response) => {
        console.log('Logged out successfully', response);
      },
      error: (error) => {
        console.error('Logout failed', error);
      }
    });
      StorageService.logOut();
      await this.router.navigateByUrl("/login");
  }

}
