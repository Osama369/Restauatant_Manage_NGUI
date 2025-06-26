import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import {  MatDialogModule } from '@angular/material/dialog';


@NgModule({
  // declarations: [AdminLayoutComponent, NavbarComponent,
  //   SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    MatDialogModule
  ]
})
export class AdminModule { }
