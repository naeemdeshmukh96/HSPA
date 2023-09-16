import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{

constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addUser(user:any) {
    let users:string[] = [];
    if(localStorage.getItem('Users')){
      users = JSON.parse(localStorage.getItem('Users') as string);
    }
    users.push(user);
    localStorage.setItem('Users',JSON.stringify(users));
  }

}

