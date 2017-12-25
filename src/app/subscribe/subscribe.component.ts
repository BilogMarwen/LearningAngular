import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  rForm: FormGroup;
  post: any;
  description: string='';
  name: string='';
  titleAlert='nom invalide';
  
  constructor(private fb:FormBuilder) { 
   this.rForm = fb.group({
   'name':[null,Validators.required],
   'description':[null,Validators.compose([Validators.required, Validators.minLength(30)])],
    });
  }

  
  addPost(post) {
    this.description = post.description;
    this.name = post.name;
  }

  ngOnInit() {
  }

}
