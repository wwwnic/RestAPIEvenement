import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private httpClient : HttpClient) { }

  url : string = "http://10.0.0.149:23784/api/"

  public getEvenements() {
    return this.httpClient.get(this.url+"Utilisateur/GetAll")
  }
}
