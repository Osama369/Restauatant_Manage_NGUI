// staff-layout/staff-layout.component.ts
import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

import { RouterModule } from '@angular/router'; // ✅ Import RouterModule
@Component({
  selector: 'app-staff-layout',
   imports: [NavbarComponent , FooterComponent , SidebarComponent , RouterModule],
   standalone: true,
  templateUrl: './staff-layout.component.html',
  styleUrls: ['./staff-layout.component.css'],

})
export class StaffLayoutComponent {
  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}