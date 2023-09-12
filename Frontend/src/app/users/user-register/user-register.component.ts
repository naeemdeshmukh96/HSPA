import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserInterface } from 'src/app/model/UserInterface';
import { AlertifyService } from 'src/app/service/alertify.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit{

  registrationForm!: FormGroup
  user: any = {};
  userSubmitted!: boolean;
  iuser!: UserInterface;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private alertify: AlertifyService
    ) {}

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  createRegistrationForm(){
    this.registrationForm = this.fb.group({
      userName: [null,Validators.required],
      email: [null,[Validators.required,Validators.email]],
      password: [null,[Validators.required,Validators.minLength(8)]],
      confirmPassword: [null,[Validators.required]],
      mobile: [null,[Validators.required,Validators.minLength(10)]],
    },{Validators: this.passwordMatchingValidator})
  }

  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    alert()
    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :
      { notmatched: true }
  };

  onSubmit() {
    this.userSubmitted = true;
    if(this.registrationForm.valid){
    //   console.log(this.registrationForm.value);
      this.user = Object.assign(this.user,this.userData());
      this.userService.addUser(this.user);
      this.resetRefForm();
      this.userSubmitted = false;
      this.alertify.success('Congrats!');
    }else{
      this.alertify.error('Huha!');
    }
  }

  userData(): UserInterface{
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value,
    }
  }

  resetRefForm() {
    this.registrationForm.reset();
  }


  //#region Getter Methods for all controls
  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }
  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }
  //#endregion


}
