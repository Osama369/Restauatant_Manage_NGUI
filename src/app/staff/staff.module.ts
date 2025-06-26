import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { RouterModule } from '@angular/router';
import { StaffLayoutComponent } from './staff-layout/staff-layout.component';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { FooterComponent } from "../shared/footer/footer.component";

@NgModule({
//   declarations: [StaffLayoutComponent,  NavbarComponent,
//     SidebarComponent, FooterComponent
// ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    RouterModule,
   
],


})
export class StaffModule { }
