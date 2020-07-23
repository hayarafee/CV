import { Info } from './info';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
 private _url: string = "/assets/data/info.json";

  constructor(private http: HttpClient) { }

  getInfos(): Observable<Info[]>{
   return this.http.get<Info[]>(this._url);

  }
}
