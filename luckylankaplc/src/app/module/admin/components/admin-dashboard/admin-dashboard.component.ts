import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../../auth/services/storage-service/storage.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../auth/services/auth-service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent{


  constructor(private router : Router,private authService : AuthService) {

  }

  async logOut() {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out of the application.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(34, 166, 179)',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!',
      cancelButtonText: 'Cancel'
    }).then(async (result) => {
      if (result.isConfirmed) {
        this.authService.logOut().subscribe({
          next: (response) => {
            console.log('Logged out successfully', response);
          },
          error: (error) => {
            console.error('Logout failed', error);
          }
        });
        StorageService.logOut();
        await this.router.navigateByUrl('/login');
      }
    });
  }
  
   
  }
