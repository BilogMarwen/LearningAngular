import { Injectable } from '@angular/core';

@Injectable()
export class UrlServiceService {

  private CountriesURL = "https://restcountries.eu/rest/v2/all";
  private PostUrl = "http://del.icio.us/api/peej/bookmarks/";


  constructor() { }

  getAllcuntriesUrl() {
    return this.CountriesURL;
  }

  GetPostUrl(){
    return this.PostUrl;
  }
}
