import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StaffLayoutComponent } from './staff-layout/staff-layout.component';

const routes: Routes = [ {
    path: '',
    component: StaffLayoutComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent

      }
    ]
    // component: DashboardComponent // default staff dashboard
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
