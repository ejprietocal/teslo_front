import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivateLoaderService } from 'src/app/services/activate-loader.service';
import { CreateItemsService } from 'src/app/views/services/create-items.service';

@Component({
  selector: 'app-create-items',
  imports: [
    CommonModule,
     FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './create-items.component.html',
  styleUrl: './create-items.component.css'
})
export class CreateItemsComponent {
  [x: string]: any;

  fb = inject(FormBuilder);
  createItemsService = inject(CreateItemsService);
  activatedLoader = inject(ActivateLoaderService);


  form: FormGroup = this.fb.group({
    nameProducto: ['', [Validators.required]],
    price: ['', [Validators.required]],
    category: ['', [Validators.required]],
    subCategory: ['', [Validators.required]],
    variante: ['', [Validators.required]],
    descriptionProduct: ['', [Validators.required]],
  });


  createProduct(){

    this.createItemsService.craeteProductoService(this.form.value).subscribe({
          next: (res) => {
            this.activatedLoader.deactivateSignal();

          },
          error: (err) => {
            this.activatedLoader.deactivateSignal();

          }
        });

  }
}
