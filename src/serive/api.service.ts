import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Color } from 'src/app/home/color.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data: Color;
  constructor(private http: HttpClient) {}
  createRequrest(data) {
    return this.http.post('www.facebook.com', data);
  }
}
