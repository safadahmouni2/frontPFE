import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartsbarService {

  route="/data_distribution"
  constructor(private httpClient: HttpClient) { }
  getvalues(){
    return this.httpClient.get(environment.APIURL+this.route);
  }
}
