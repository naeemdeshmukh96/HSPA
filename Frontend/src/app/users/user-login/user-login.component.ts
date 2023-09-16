import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/service/alertify.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private userAuth: AuthService,
    private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm) {
    var token = this.userAuth.authUser(loginForm.value);
    if(token){
      localStorage.setItem('token',JSON.stringify(loginForm.value));
      this.alertify.success('In');
      this.router.navigate(['/']);
    }else{
      this.alertify.error('fail');
    }
  }

}
