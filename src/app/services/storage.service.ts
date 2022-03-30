import { Injectable } from '@angular/core';
import { LogMessagesService } from './log-messages.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public keyword: string = '';

  constructor(
    private logMessage: LogMessagesService,
    private http: HttpClient
  ) {}

  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get() {
    //  return JSON.parse(localStorage.getItem()||{})
    return 'data';
  }
  //allow us the observe/watch changes
  getData(): Observable<any> {
    this.logMessage.addNewMsg('fetch products info');
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getDataById(id: any): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
