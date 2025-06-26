// src/app/core/supplier.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Supplier } from '../models/supplier';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SupplierService {
  private apiUrl = 'https://localhost:7244/api';

  constructor(private http: HttpClient) {}

  getAllSupplier(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.apiUrl}/Supplier/GetAllSupplier`);
  }

  getSupplierById(id: number): Observable<Supplier> {
    return this.http.get<Supplier>(`${this.apiUrl}/Supplier/Get/${id}`);
  }

  addSupplier(supplier: Supplier): Observable<any> {
    return this.http.post(`${this.apiUrl}/Supplier/Add`, supplier);
  }

  updateSupplier(supplier: Supplier): Observable<any> {
    return this.http.put(`${this.apiUrl}/Supplier/Update`, supplier);
  }

  deleteSupplier(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Supplier/Delete/${id}`);
  }
}
