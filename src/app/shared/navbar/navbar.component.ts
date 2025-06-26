// shared/navbar/navbar.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { RouterModule } from '@angular/router'; // ✅ needed for routerLinkActive, etc.


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [RouterModule], // ✅ required for routing bindings
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