import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ComparaisonbarService {
  route ="/comparaison"
  constructor(private httpClient: HttpClient) { }
  getvalues(){
    return this.httpClient.get(environment.APIURL+this.route);
  }
}
