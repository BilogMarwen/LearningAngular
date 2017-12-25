import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs/Rx';
import { Console } from '@angular/core/src/console';

interface Country {
  name: string;
  capital:string;
  population:string;
  latlng:number [];
  flag:string;
}

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})


export class DashbordComponent implements OnInit {

  constructor(private http:HttpClient) {
  }

  Countries: Country[];
  title = 'app';
  result:any;
  ngOnInit(): void {
    
   this.http
    .get("https://restcountries.eu/rest/v2/all")    
    .subscribe(
      response =>this.result =response
    
              );

    
    
    } 
  

}
