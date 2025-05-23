import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, Input, Signal, ViewChild, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { jwtDecode } from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { PayloadUser } from 'src/app/interfaces/payload-user';
import { Variante } from 'src/app/interfaces/variante';
import { VarianteResponse } from 'src/app/interfaces/variante-response';
import { ActivateLoaderService } from 'src/app/services/activate-loader.service';
import { CreateVariantsService } from 'src/app/views/services/create-variants.service';

@Component({
  selector: 'app-create-variants',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  templateUrl: './create-variants.component.html',
  styleUrl: './create-variants.component.css'
})
export class CreateVariantsComponent {

  private createVariantSubscription!:Subscription
  fb = inject(FormBuilder);
  readonly loaderService = inject(ActivateLoaderService);
  private readonly toastr = inject(ToastrService);
  private readonly createVarianteService = inject(CreateVariantsService);
  @Input({ required: true }) variantsCreatedSignal!: WritableSignal<boolean>;

  @Input({ required: true}) variante: Variante[] = [];
  @Input({ required: true}) variantsId!: WritableSignal<number>;
  @Input({ required: true}) mode!: Signal<string>;
  @Input({ required: true}) resetForm!: WritableSignal<boolean>;

  @ViewChild('createVariante') createVariante!: ElementRef<HTMLElement>;

   textModalmodify = {
    title : "Actualizar Variante",
    button : "Modificar"
  }
  textModalCreate = {
    title : "Crear Variante",
    button : "Crear"
  }

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required,Validators.minLength(3)]],
    id_business: ['']
  });

  createVariants() {
      this.loaderService.activateInternalSignal();

      const { id_business } = jwtDecode<PayloadUser>(localStorage.getItem('auth_token')!);
      this.form.get('id_business')?.setValue(id_business);

    if (this.mode() === 'create') {
      this.createVariantSubscription =  this.createVarianteService.createNewVariante(this.form).subscribe({
         next: (res: VarianteResponse) => {
           console.log(res);
         },
         complete: () => {
          this.createVariante.nativeElement.classList.add('hidden');
          this.loaderService.deactivateInternalSignal();
          this.toastr.success('Categoría creada exitosamente');
          // this.variantsCreatedSignal.set(true);
          this.form.reset();
        },
         error: (err:any ) => {
           console.error('Error en la creación de la variante:', err);
           this.loaderService.deactivateInternalSignal();
           this.toastr.error(err.error.message);
           this.form.reset();
         }
      });

    }else{
      console.log('update');
    }
  }

  ngOnDestroy(): void {
    this.createVariantSubscription.unsubscribe()

  }



}
