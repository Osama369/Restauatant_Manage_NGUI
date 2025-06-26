import { Component } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../core/product.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component'; // adjust if needed

@Component({
  selector: 'app-product-lis',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product-lis.component.html',
  styleUrl: './product-lis.component.css'
})
export class ProductLisComponent {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe({
      next: (data) => (this.products = data),
      error: (err) => console.error('Failed to load products', err),
    });
  }

  onEdit(product: Product) {
    const dialogRef = this.dialog.open(ProductEditComponent, {
      width: '400px',
      data: { ...product }  // Pass a copy to avoid mutating the original
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'updated') {
        this.loadProducts(); // Refresh list after edit
      }
    });
  }

 onDelete(productId: number | undefined) {
  if (!productId) return;

  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    width: '350px',
    data: {
      title: 'Confirm Deletion',
      message: 'Are you sure you want to delete this product?'
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.productService.deleteProduct(productId).subscribe({
        next: () => {
          this.loadProducts();
        },
        error: (err) => {
          console.error('Delete failed', err);
        }
      });
    }
  });
}


  onAddProduct() {
    this.router.navigate(['/admin/products/add']);
  }
}
