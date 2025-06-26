import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://localhost:7244/api'
  constructor(private http: HttpClient, private router: Router) { }


  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/Product/GetAllProducts`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/Product/Get/${id}`);
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post(`${this.baseUrl}/Product/Add`, product);
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(`${this.baseUrl}/Product/Update`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Product/Delete/${id}`);
  }

}
