import { CommonModule } from '@angular/common';
import { Component, effect, ElementRef, inject, Input, Signal, ViewChild, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { CategoryCreatedResponse } from 'src/app/interfaces/category-created-response';
import { ActivateLoaderService } from 'src/app/services/activate-loader.service';
import { CategoryService } from 'src/app/views/services/category.service';
import { jwtDecode } from "jwt-decode";
import { PayloadUser } from 'src/app/interfaces/payload-user';
import { Category } from 'src/app/interfaces/category';


@Component({
  selector: 'app-create-category',
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './create-update-category.component.html',
  styleUrl: './create-update-category.component.css'
})
export class CreateUpdateCategoryComponent {

  @Input({ required: true }) categoryCreatedSignal!: WritableSignal<boolean>;
  @Input({ required: true}) categories: Category[] = [];
  @Input({ required: true}) categoryId!: WritableSignal<number>;
  @Input({ required: true}) mode!: Signal<string>;
  @Input({ required: true}) resetForm!: WritableSignal<boolean>;
  @ViewChild('createCategory') createCategory!: ElementRef<HTMLElement>;

  private createCategorySub?: Subscription;
  private readonly createCategoryService = inject(CategoryService);
  private readonly fb = inject(FormBuilder);
  private readonly loaderService = inject(ActivateLoaderService);
  private readonly toastr = inject(ToastrService);
  private updateCategorySub?: Subscription;


  constructor(){
    effect(() => {
      if (this.categoryId() && this.mode() === 'modify') {
        this.createCategoryService.getCategory(this.categoryId()).subscribe({
          next: (res) => {
            this.form.get('description')?.setValue(res.description);
            this.form.get('isActive')?.setValue(res.isActive);
            this.form.get('name')?.setValue(res.name);
          },
          error: (err) => {
            console.error('Error al obtener la categoría:', err);
            this.loaderService.deactivateInternalSignal();
            this.toastr.error(err.error.message);
          }
        });
      }
      if(this.resetForm()){
        this.form.reset({
          name: '',
          description: '',
          isActive: true,
        });
        this.resetForm.set(false);
      }
    });
  }



  textModalmodify = {
    title : "Modificar Categoría",
    button : "Modificar"
  }
  textModalCreate = {
    title : "Crear Categoría",
    button : "Crear"
  }

  form: FormGroup = this.fb.group({
    description: ['', [Validators.required, Validators.minLength(3)]],
    id_business: [''],
    isActive: [ true ,Validators.required],
    name: ['', [Validators.required, Validators.minLength(3)]],
  });


  onSubmitCategory() : void {
    this.loaderService.activateInternalSignal();
    const { id_business } = jwtDecode<PayloadUser>(localStorage.getItem('auth_token')!);
    this.form.get('id_business')?.setValue(id_business);
    if (this.mode() === 'create') {
      this.createCategorySub = this.createCategoryService.createCategory(this.form).subscribe({
         next: (res: CategoryCreatedResponse) => {
         },
         complete: () => {
           this.categoryCreatedSignal.set(true);
           this.createCategory.nativeElement.classList.add('hidden');
           this.createCategorySub?.unsubscribe();
           this.loaderService.deactivateInternalSignal();
           this.toastr.success('Categoría creada exitosamente');
           this.form.reset({
             name: '',
             description: '',
             isActive: true,
           });
         },
         error: (err:any ) => {
           console.error('Error en la creación de categoría:', err);
           this.loaderService.deactivateInternalSignal();
           this.toastr.error(err.error.message);
           this.form.reset({
             name: '',
             description: '',
             isActive: true,
           });
         }
      });
    }
    else{
      this.updateCategorySub = this.createCategoryService.updateCategory(this.form, this.categoryId()).subscribe({
        next: (res: Category) => {
          this.createCategory.nativeElement.classList.add('hidden');
          this.loaderService.deactivateInternalSignal();
          this.toastr.success('Categoría actualizada exitosamente');
          this.categoryCreatedSignal.set(true);
          this.updateCategorySub?.unsubscribe();
          this.form.reset({
            name: '',
            description: '',
            isActive: true,
          });
          this.categoryId.set(NaN);
        },
        error: (err:any ) => {
          console.error('Error en la actualización de categoría:', err);
          this.loaderService.deactivateInternalSignal();
          this.toastr.error(err.error.message);
          this.form.reset({
            name: '',
            description: '',
            isActive: true,
          });
        }
      });
    }

  }

}
