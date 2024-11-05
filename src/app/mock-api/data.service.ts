import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://api.weatherapi.com/v1';
  private apiKey = 'd07f8290adc64561bc961715240511';

  constructor( private http: HttpClient) { }

  getCurrentWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}/current.json?key=${this.apiKey}&q=${city}`;
    return this.http.get<any>(url);
  }


}
