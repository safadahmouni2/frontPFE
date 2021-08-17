import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartspieService {
route="/influence-distribution"
constructor(private httpClient: HttpClient) { }
getvalues(){
  return this.httpClient.get(environment.APIURL+this.route);
}
}
