import { environment } from '../../environments/environment';;
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PercentagepieService {

  route ="/person-distribution"
  constructor(private httpClient: HttpClient) { }
  getvalues(){
    return this.httpClient.get(environment.APIURL+this.route);
  }
}
