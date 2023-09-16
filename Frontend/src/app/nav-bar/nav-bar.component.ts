import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../service/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedinUser!:string|null;

  constructor(private router: Router,
    private alertify: AlertifyService) { }

  ngOnInit() {
  }

  loggedIn(){
    this.loggedinUser = localStorage.getItem('token');
    return this.loggedinUser;
  }

  onLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    this.alertify.success('You are logged out !');
    this.router.navigate(['/']);
  }

}
