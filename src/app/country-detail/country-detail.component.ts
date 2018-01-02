import { Component, OnInit } from '@angular/core';
import {UrlServiceService} from '../url-service.service'
import { window } from 'rxjs/operators/window';
import { Window } from 'selenium-webdriver';
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  code:number;
  constructor(private urlservice: UrlServiceService, private routeParam:ActivatedRoute) {
     this.routeParam.params.subscribe(params=>this.code =params ['code']);
   }

  ngOnInit() {
    console.log(this.urlservice.GetCountryCodeUrl(this.code));
  }

}
