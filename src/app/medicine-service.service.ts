// medicine-service.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  private readonly baseUrl = 'https://medicalstore.mashupstack.com/api/medicine';

  constructor(private readonly http: HttpClient) {  }

  private getHeaders(): HttpHeaders { 
    const token = localStorage.getItem('token'); 
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`});
  }
  
  getAllMedicines(): Observable<any[]> {
    const headers = this.getHeaders();
    return this.http.get<any[]>(this.baseUrl, { headers });
  }
  getMedicine(id: string): Observable<any> { 
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.baseUrl}/${id}`, { headers });
  }
  addMedicine(medicine: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post<any>(`${this.baseUrl}`, medicine, { headers });
  }
  editMedicine(id: string, medicine: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post<any>(`${this.baseUrl}/${id}`, medicine, { headers });
  }
  deleteMedicine(id: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.delete<any>(`${this.baseUrl}/${id}`, { headers });
  }
  searchMedicines(keyword: string): Observable<any[]> {
    const headers = this.getHeaders();
    return this.http.get<any[]>(`${this.baseUrl}/search?keyword=${keyword}`, { headers });
  }
}
