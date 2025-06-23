// shared/navbar/navbar.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: false
})
export class NavbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

  constructor(private authService: AuthService) {}

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  logout() {
    this.authService.logout();
  }
}