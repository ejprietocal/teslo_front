import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { jwtDecode } from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { PayloadUser } from 'src/app/interfaces/payload-user';
import { VarianteResponse } from 'src/app/interfaces/variante-response';
import { ActivateLoaderService } from 'src/app/services/activate-loader.service';
import { CreateVariantsService } from 'src/app/views/services/create-variants.service';

@Component({
  selector: 'app-create-variants',
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,],
  templateUrl: './create-variants.component.html',
  styleUrl: './create-variants.component.css'
})
export class CreateVariantsComponent {
 fb = inject(FormBuilder);
  readonly loaderService = inject(ActivateLoaderService);
  private readonly toastr = inject(ToastrService);
  private readonly createVarianteService = inject(CreateVariantsService);

  @ViewChild('createVariante') createVariante!: ElementRef<HTMLElement>;


  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(3)]],
    id_business: ['']
  });

  createVariants() : Subscription{
      this.loaderService.activateInternalSignal();

      const { id_business } = jwtDecode<PayloadUser>(localStorage.getItem('auth_token')!);
      this.form.get('id_business')?.setValue(id_business);

      return this.createVarianteService.createNewVariante(this.form).subscribe({
         next: (res: VarianteResponse) => {
           console.log(res);
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
      this.createVariants().unsubscribe();
      console.log('entro');
    }



}
