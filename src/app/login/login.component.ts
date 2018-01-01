import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpClient } from "@angular/common/http";
import { UrlServiceService } from '../url-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  post: any;

  Password: string = '';
  email: string = '';
  validationMessage = 'Valeur non valide';
  postresult: any;


  constructor(private LoginFormGroup: FormBuilder, private httpclient: HttpClient,
    private urls: UrlServiceService) {

    this.LoginForm = LoginFormGroup.group({
      'example': [null, Validators.compose([Validators.required, Validators.email])],
      'test': [null, Validators.compose([Validators.required, Validators.minLength(7)])]
    });
  }

  addPost(post) {
    debugger

    var posturl = this.urls.GetPostUrl();

    this.httpclient.post(posturl, {})
      .subscribe(
      Response => this.postresult = Response
      );

    this.email = post.email;
    this.Password = post.Password;
  }

  ngOnInit() {



  }

}
