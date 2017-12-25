import { Injectable } from '@angular/core';

@Injectable()
export class UrlServiceService {

  private CountriesURL = "https://restcountries.eu/rest/v2/all";
  private PostCountrie = "";


  constructor() { }

  getAllcuntriesUrl() {
    return this.CountriesURL;
  }

}
