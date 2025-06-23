// shared/sidebar/sidebar.component.ts
import { Component, Input } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
  // adjust path if needed

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: false
})
export class SidebarComponent {
  @Input() isSidebarOpen = true;

  constructor(private authService: AuthService) {}

  get isAdmin(): boolean {
    return this.authService.getRole() === 'Admin';
  }

  get isStaff(): boolean {
    return this.authService.getRole() === 'Staff';
  }
}
