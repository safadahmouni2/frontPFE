import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  route = "/application"
  constructor(private httpClient: HttpClient) { }
  getvalues(textinput: string, algorithm: string) {
    return this.httpClient.get(environment.APIURL + 
      this.route + "?textinput=" + textinput + "&algorithm=" +
       algorithm);
  }

}
