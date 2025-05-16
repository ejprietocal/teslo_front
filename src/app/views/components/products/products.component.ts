
import { CommonModule } from '@angular/common';
import { Component, inject, Signal, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-products',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    FontAwesomeModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export default class ProductsComponent {

}
