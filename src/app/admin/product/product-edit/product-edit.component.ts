import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../../models/product';
import { ProductService } from '../../../core/product.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ProductEditComponent {
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProductEditComponent>,
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public product: Product
  ) {
    this.editForm = this.fb.group({
      id: [product.id],
      name: [product.name, Validators.required],
      purcahsePrice: [product.purcahsePrice, [Validators.required, Validators.min(0)]],
      salePrice: [product.salePrice, [Validators.required, Validators.min(0)]],
      imageUrl: [product.imageUrl]
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
      this.productService.updateProduct(this.editForm.value).subscribe(() => {
        this.dialogRef.close('updated');
      });
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
