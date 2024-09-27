import { Component, OnInit } from '@angular/core';
import { StorageService } from './auth/services/storage-service/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'luckylankaplc';

  isAdminLoggedIn:boolean = StorageService.isAdminLoggedIn();
  constructor(private router : Router) {

  }

  ngOnInit() {

    this.router.events.subscribe(event =>{
      if(event.constructor.name === "NavigationEnd"){
        this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
        if(!this.isAdminLoggedIn){
            this.router.navigateByUrl("/login")
        }
      }
    })
  }
}
