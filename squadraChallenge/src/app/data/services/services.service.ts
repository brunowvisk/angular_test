import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ideveloperModel } from '../model/ideveloperModel';
import { ireturnDefaultModel } from '../model/ireturnDefaultModel';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public Url = "https://61d4ad578df81200178a8df9.mockapi.io/api/v1/developer"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  constructor(private httpClient: HttpClient) { }

  getAllDevelopers(): Observable<ideveloperModel[]> {
    return this.httpClient.get<ideveloperModel[]>(this.Url);
  }


}
