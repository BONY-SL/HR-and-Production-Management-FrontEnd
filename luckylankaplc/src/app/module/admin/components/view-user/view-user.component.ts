import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css'
})
export class ViewUserComponent implements OnInit{

  users: any[] = [];

  ngOnInit(): void {
    this.getUsers();
  }

  constructor(private adminService : AdminService){

  }

  getUsers(){

    this.adminService.getUsers().subscribe(
      (response) => {
        this.users = response;
      },
      (error) =>{
        console.error('Error fetching users', error); 
      }
    );

  }

}
