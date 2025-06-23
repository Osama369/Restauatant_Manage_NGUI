import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

export interface LoginPayload {
  email: string;
  password: string;
  rememberMe: boolean;
}

@Injectable({
  providedIn: 'root'
})


export class AuthService {

   
  // base url 


  private baseUrl = 'https://localhost:7244/api'
  constructor(private http: HttpClient, private router: Router) { }


  // login method 
   
   login(payload: LoginPayload): Observable<any> {
    return this.http.post(`${this.baseUrl}/Account/LogIn`, payload);
  }
   
     register(user: any) {
    return this.http.post(`${this.baseUrl}/Account/Registered`, user);
  }

  storeToken(token: string, email: string, role: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    localStorage.setItem('role', role);
  }

  navigateBasedOnRole(role: string) {
    if (role === 'Admin') {
      this.router.navigate(['/admin/dashboard']);
    } else {
      this.router.navigate(['/staff/dashboard']);
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getRole() {
    return localStorage.getItem('role');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
}
