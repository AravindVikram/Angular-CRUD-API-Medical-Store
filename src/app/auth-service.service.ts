import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://medicalstore.mashupstack.com/api';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
     });
  }
  
  register(registrationData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, registrationData);
  }
  
  login(LoginData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, LoginData);
  }
  
  logout(): Observable<any> {
    const headers = this.getHeaders();
    localStorage.removeItem('token');
    return this.http.post<any>(`${this.baseUrl}/logout`,{ headers });
  }

}
