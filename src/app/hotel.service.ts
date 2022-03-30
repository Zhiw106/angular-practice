//ng g s hotel
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HotelService {

  constructor(private http: HttpClient) {}
  getHotels(): Observable<any> {
    return this.http.get('url');
  }
}
