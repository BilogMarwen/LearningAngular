import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  post:any;                     
  
  Password:string = '';
  UserName:string = '';
  validationMessage='Valeur non valide';

  constructor( private LoginFormGroup: FormBuilder) {
    
    this.LoginForm = LoginFormGroup.group({
      'UserName' : [null, Validators.compose([Validators.required, Validators.email ])],
      'Password' : [null, Validators.minLength(7)]
    });
   }

   addPost(post) {
    this.UserName = post.UserName;
    this.Password = post.Password;
  }

  ngOnInit() {
  }

}
