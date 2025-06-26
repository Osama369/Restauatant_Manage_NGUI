import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SupplierService } from '../../../core/supplier.service';
import { Router } from '@angular/router';
import { MatCard, MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-supplier-add',
  imports: [CommonModule, ReactiveFormsModule, FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,],
  templateUrl: './supplier-add.component.html',
  styleUrl: './supplier-add.component.css'
})
export class SupplierAddComponent {

    form: FormGroup;

  constructor(private fb: FormBuilder, private supplierService: SupplierService, private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.supplierService.addSupplier(this.form.value).subscribe({
        next: () => this.router.navigate(['/admin/supplier']),
        error: err => console.error('Add failed', err)
      });
    }
  }
}

