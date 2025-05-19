import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, Input, ViewChild, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { CategoryCreatedResponse } from 'src/app/interfaces/category-created-response';
import { ActivateLoaderService } from 'src/app/services/activate-loader.service';
import { CategoryService } from 'src/app/views/services/category.service';
import { jwtDecode } from "jwt-decode";
import { PayloadUser } from 'src/app/interfaces/payload-user';


@Component({
  selector: 'app-create-category',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css'
})
export class CreateCategoryComponent {

  @Input({ required: true }) categoryCreatedSignal!: WritableSignal<boolean>;


  fb = inject(FormBuilder);
  readonly loaderService = inject(ActivateLoaderService);
  private readonly toastr = inject(ToastrService);
  private readonly createCategoryService = inject(CategoryService);
  private createCategorySub?: Subscription;


  @ViewChild('createCategory') createCategory!: ElementRef<HTMLElement>;


  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(3)]],
    id_business: ['']
  });

  onSubmitCreateCategory() : void {
    this.loaderService.activateInternalSignal();

    const { id_business } = jwtDecode<PayloadUser>(localStorage.getItem('auth_token')!);
    this.form.get('id_business')?.setValue(id_business);

    this.createCategorySub = this.createCategoryService.createCategory(this.form).subscribe({
       next: (res: CategoryCreatedResponse) => {

       },
       complete: () => {
         this.createCategory.nativeElement.classList.add('hidden');
         this.loaderService.deactivateInternalSignal();
         this.toastr.success('Categoría creada exitosamente');
         this.categoryCreatedSignal.set(true);
         this.form.reset();
       },
       error: (err:any ) => {
         console.error('Error en la creación de categoría:', err);
         this.loaderService.deactivateInternalSignal();
         this.toastr.error(err.error.message);
         this.form.reset();
       }
    });
  }

  ngOnDestroy(): void {
    this.createCategorySub?.unsubscribe();
  }

}
