import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { StaffLayoutComponent } from '../staff-layout/staff-layout.component';

@Component({
  selector: 'app-dashboard',
  imports: [],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    // staffName = localStorage.getItem('email')

 public email: string | null;
 public  role: string | null;

  constructor(private authService: AuthService) {
    this.email = this.authService.getToken() ? localStorage.getItem('email') : null;
    this.role = this.authService.getRole();
  }

  //   logout() {
  //   this.authService.logout();
  // }
}
