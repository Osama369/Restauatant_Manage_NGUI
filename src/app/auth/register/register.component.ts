import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatOption } from '@angular/material/select';
import { CommonModule } from '@angular/common'; // ✅ import this


import { User } from '../../models/user';
import { Role } from '../../models/role';

@Component({
  selector: 'app-register',
  standalone: true, // ✅ Important for standalone components
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
  styleUrls: ['./register.component.css'] // ✅ fix spelling
})
export class RegisterComponent {
  user: User = {
    name: '',
    userEmail: '',
    phone: '',
    password: '',
    role: Role.Staff
  };

  roles: Role[] = Object.values(Role); // cleaner if using enum

  register() {
    console.log('Registering user:', this.user);
  }
}
