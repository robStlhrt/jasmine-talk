import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatFactService {

  constructor(private http: HttpClient) { }

  getCatsFacts(): Promise<any> {
    return this.http
      .get('https://cat-fact.herokuapp.com/facts').toPromise();
  }
}
