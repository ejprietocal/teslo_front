import { Component, inject, Input, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-create-update-sub-category',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './create-update-sub-category.component.html',
  styleUrl: './create-update-sub-category.component.css'
})
export class CreateUpdateSubCategoryComponent {

  @Input({ required: true }) mode!: WritableSignal<string>;
  @Input({ required: true }) categories!: Category[];

  fb = inject(FormBuilder);

  textModalmodify = {
    title : "Modificar SubCategoria",
    button : "Modificar"
  }
  textModalCreate = {
    title : "Crear SubCategoria",
    button : "Crear"
  }

  ngOnInit(): void {
    console.log(this.categories);
  }

  form: FormGroup = this.fb.group({
    category_product_id: [Number, [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(3)]],
    isActive: [ true ,Validators.required],
    name: ['', [Validators.required, Validators.minLength(3)]],
    slug : ['', Validators.required],
  });

}
