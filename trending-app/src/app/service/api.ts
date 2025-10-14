import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {
  page: number = 1;
  constructor(private _http: HttpClient) { }


  getRepos(): Observable<any> {
    return this._http.get(`https://api.github.com/search/repositories?q=created:${this.getTheDate()}&sort=stars&order=desc&page=${this.page}`)
  }


    //get 30 days
   getTheDate(): string {
    const d = new Date();
    d.setDate(d.getDate() - 30);
    return d.toISOString().split('T')[0];
  }


}
