import { Injectable } from '@angular/core';
import { UserInterface } from '../model/UserInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

  authUser(user: any){
    let userArray: UserInterface[] = [];
    if(localStorage.getItem('Users')){
      userArray  = JSON.parse(localStorage.getItem('Users') as string);
    }
    return userArray.find(p => p.userName === user.userName && p.password === user.password);
  }

}
