import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Supplier } from '../../../models/supplier';
import { SupplierService } from '../../../core/supplier.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-supplier-edit',
  standalone: true,
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class SupplierEditComponent {
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<SupplierEditComponent>,
    private supplierService: SupplierService,
    @Inject(MAT_DIALOG_DATA) public supplier: Supplier
  ) {
    this.editForm = this.fb.group({
      id: [supplier.id],
      name: [supplier.name, Validators.required]
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
      this.supplierService.updateSupplier(this.editForm.value).subscribe(() => {
        this.dialogRef.close('updated');
      });
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
