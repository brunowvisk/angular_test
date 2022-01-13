import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { ideveloperModel } from '../model/ideveloperModel';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private readonly endpoint = "https://61d4ad578df81200178a8df9.mockapi.io/api/v1/developer/"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  constructor(private httpClient: HttpClient) { }

  getAllDevelopers(): Observable<ideveloperModel[]> {
    return this.httpClient.get<ideveloperModel[]>(this.endpoint);
  }

  PostNewDev(dev: any): Observable<ideveloperModel> {
    return this.httpClient.post<ideveloperModel>
    (this.endpoint, JSON.stringify(dev), this.httpOptions);
  }

  deleteDev(id: string): Observable<ideveloperModel> {
    return this.httpClient.delete<ideveloperModel>(this.endpoint + id);
  }

  updateDev(id: string): Observable<ideveloperModel> {
    return this.httpClient.put<ideveloperModel>(this.endpoint + id, JSON.stringify(id),
    this.httpOptions).pipe(retry(1));
  }



}
