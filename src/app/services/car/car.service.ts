import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ICar from 'models/car/interfaces/Car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private options = { withCredentials: true };

  constructor(private http: HttpClient) {}

  getCars(): Observable<{ data: ICar[] }> {
    return this.http.get<{ data: ICar[] }>('http://localhost:4200/api/cars');
  }
}
