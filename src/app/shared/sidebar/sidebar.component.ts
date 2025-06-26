  import { Component, Input, OnInit } from '@angular/core';
  import { AuthService } from '../../auth/auth.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
    
  @Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
    standalone: true,
    imports: [RouterModule, CommonModule], // ✅ required for routing bindings
  })
  export class SidebarComponent implements OnInit {
    @Input() isSidebarOpen = true;

    links: { label: string; route: string; icon: string }[] = [];

  public constructor(public authService: AuthService) {}

    ngOnInit(): void {
  const role = this.authService.getRole()?.trim().toLowerCase(); // normalize

  console.log('Sidebar role (normalized):', role);

  if (role === 'staff') {
    this.links = [
      { label: 'Dashboard', route: '/staff/dashboard', icon: '🏠' },
      { label: 'New Order', route: '/staff/orders', icon: '🧾' },
      { label: 'Invoices', route: '/staff/invoices', icon: '📄' },
      { label: 'Profile', route: '/staff/profile', icon: '👤' }
    ];
  }

  if (role === 'admin') {
    this.links = [
      { label: 'Dashboard', route: '/admin/dashboard', icon: '📊' },
      { label: 'Products', route: '/admin/products', icon: '🍽️' },
      {label: 'suppliers' , route: '/admin/supplier', icon: ''},
      { label: 'Staff', route: '/admin/staff', icon: '👥' }
    ];
  }

  // console.log('Links array:', this.links);
}

  }
