import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatOption } from '@angular/material/core'; // ✅ from core
import { CommonModule } from '@angular/common';

import { User } from '../../models/user';
import { Role } from '../../models/role';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatOption,
    CommonModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {
    name: '',
    userEmail: '',
    phone: '',
    password: '',
    role: Role.Staff
  };

  roles: Role[] = Object.values(Role);

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    // Prepare payload expected by backend
    const payload = {
      userName: this.user.name,
      email: this.user.userEmail,
      password: this.user.password,
      phone: this.user.phone,
      roleId: this.user.role === Role.Admin ? 1 : 2
    };

    this.authService.register(payload).subscribe({
      next: () => {
        alert('Registration successful!');
        console.log(payload);
        
        this.router.navigate(['/auth/login']);
      },
      error: err => {
        console.error('Registration failed:', err);
        alert('Something went wrong during registration.');
      }
    });
  }
}
