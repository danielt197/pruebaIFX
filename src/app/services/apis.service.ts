import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  path: String = 'https://www.dnd5eapi.co'
  headers: HttpHeaders;
  constructor(
    private http: HttpClient
  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
   }

  getMonsters(){
    return this.http.get(`${this.path}/api/monsters`,
    {headers: this.headers, responseType: 'json'});
  }

  getMonsterByUrl(url){
    return this.http.get(`${this.path}${url}`,
    {headers: this.headers, responseType: 'json'});
  }

  getRaces(){
    return this.http.get(`${this.path}/api/races`,
    {headers: this.headers, responseType: 'json'});
  }

  getRacesByUrl(name){
    return this.http.get(`${this.path}/api/races/${name}`,
    {headers: this.headers, responseType: 'json'});
  }
}
