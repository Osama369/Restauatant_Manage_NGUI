import { Component } from '@angular/core';
import { Supplier } from '../../../models/supplier';
import { SupplierService } from '../../../core/supplier.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { SupplierEditComponent } from '../supplier-edit/supplier-edit.component';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component'; // adjust path if needed
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-supplier-list',
  standalone: true,
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css'],
  imports: [CommonModule, RouterModule, MatIconModule],
})
export class SupplierListComponent {
  suppliers: Supplier[] = [];

  constructor(
    private supplierService: SupplierService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadSuppliers();
  }

  loadSuppliers() {
    this.supplierService.getAllSupplier().subscribe({
      next: (data) => (this.suppliers = data),
      error: (err) => console.error('Failed to load suppliers', err),
    });
  }

  onEdit(supplier: Supplier) {
    const dialogRef = this.dialog.open(SupplierEditComponent, {
      width: '400px',
      data: { ...supplier }, // send a copy
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'updated') {
        this.loadSuppliers();
      }
    });
  }

  onDelete(supplierId: number | undefined) {
    if (!supplierId) return;

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: 'Confirm Deletion',
        message: 'Are you sure you want to delete this supplier?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.supplierService.deleteSupplier(supplierId).subscribe({
          next: () => this.loadSuppliers(),
          error: (err) => console.error('Delete failed', err),
        });
      }
    });
  }

  onAddSupplier() {
    this.router.navigate(['/admin/supplier/add']);
  }
}
