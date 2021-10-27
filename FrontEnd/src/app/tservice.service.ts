import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Options } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class TserviceService {
  public url: string;
	public identity;
	public token;


  constructor(private _http: HttpClient) { 
    this.url = "http://127.0.0.1:8000/test";
    
  }
  getTest(){
   

;
  const body = { title: 'Angular POST Request Example' };

  return this._http.post(this.url,body);
  }

}
