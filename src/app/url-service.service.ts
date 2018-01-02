import { Injectable } from '@angular/core';

@Injectable()
export class UrlServiceService {

  private CountriesURL = "https://restcountries.eu/rest/v2/all";
  private PostUrl = "http://del.icio.us/api/peej/bookmarks/";
  private CountryByCodeUrl ="https://restcountries.eu/rest/v2/alpha/{code}";



  constructor() { }

  getAllcuntriesUrl() {
    return this.CountriesURL;
  }

  GetPostUrl(){
    return this.PostUrl;
  }

  GetCountryCodeUrl(code)
  {
    return this.CountryByCodeUrl.replace('code',code);
  }

}
