import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ProductLisComponent } from './product/product-lis/product-lis.component';
import { ProductService } from '../core/product.service';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { SupplierListComponent } from './supplier/supplier-list/supplier-list.component';
import { SupplierAddComponent } from './supplier/supplier-add/supplier-add.component';


const routes: Routes = [ {
    path: '',
    component: AdminLayoutComponent,
    
     children: [
           
              { path: 'dashboard', component: DashboardComponent },
             { path: 'products', component: ProductLisComponent },  // loadproducts 
            //  { path: 'products/edit/:id', component: Prod },
             {path: 'products/add', component: ProductAddComponent},
            //  {path: 'products/edit', component: ProductAddComponent},

            {path: 'supplier', component: SupplierListComponent} ,// load the supplier
           {path: 'supplier/add', component: SupplierAddComponent} // load the supplier

         ]
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
