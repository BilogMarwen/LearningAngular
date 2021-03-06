import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { LoginComponent } from './login/login.component';
import {UrlServiceService} from './url-service.service';
import { AuthenticateGuard } from './authenticate.guard';
import { CountryDetailComponent } from './country-detail/country-detail.component';
// import { CreateCountryComponent } from './create-country/create-country.component';

const appRoutes : Routes=[
  {
    path:'home',
    component:HomeComponent
  },{
    path:'about',
    component:AboutComponent
  },{
    path:'contact',
    component:ContactComponent
  }, {
    path:'dashbord',
    component:DashbordComponent,
    canActivate:[AuthenticateGuard]
  },{
    path:'subscribe',
    component:SubscribeComponent
  },{
    path:'login',
    component:LoginComponent
  },{
    path:'ComponentDetail/:code',
    component:CountryDetailComponent,
    canActivate:[AuthenticateGuard]
  }
  ,{
    path:'**',
    component:HomeComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SubscribeComponent,
    LoginComponent,
    CountryDetailComponent,
],
  imports: [
      RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UrlServiceService,AuthenticateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
