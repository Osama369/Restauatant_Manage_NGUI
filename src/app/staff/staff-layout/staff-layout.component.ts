// staff-layout/staff-layout.component.ts
import { Component } from '@angular/core';


@Component({
  selector: 'app-staff-layout',
   
  standalone: false,
  templateUrl: './staff-layout.component.html',
  styleUrls: ['./staff-layout.component.css'],

})
export class StaffLayoutComponent {
  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}