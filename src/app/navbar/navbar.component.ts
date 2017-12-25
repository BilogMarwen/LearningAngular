import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  constructor() {


   }

  ngOnInit() {
    
    this.NavBarElements =[
      
       {AncorName:"Home",AncorUrl:"/home"}
      ,{AncorName:"About",AncorUrl:"/about"}
      ,{AncorName:"Contact",AncorUrl:"/contact"}
      ,{AncorName:"Dashboard",AncorUrl:"/dashbord"}
      
       ];
    }
 HomeLink:LinkModel;

 NavBarElements:LinkModel[];



}

export class LinkModel
{
  AncorName:string;
  AncorUrl:string;
}