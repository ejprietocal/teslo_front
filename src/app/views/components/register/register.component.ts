import { CommonModule } from '@angular/common';
import { Component, inject, Signal, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { User } from '../../../interfaces/user';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReCaptchaV3Service } from 'ng-recaptcha-2';

import { RegisterService } from '../../services/register.service';

import { TipoNegocio } from 'src/app/interfaces/tipo-negocio';

import { Subscription } from 'rxjs';
import { ActivateLoaderService } from 'src/app/services/activate-loader.service';




@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    FontAwesomeModule,


  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  public datosUser = signal<User | null>(null);

  fb = inject(FormBuilder);
  activatedLoader = inject(ActivateLoaderService);
  recaptchaService = inject(ReCaptchaV3Service);
  res: TipoNegocio[] | undefined;

  constructor (
    private readonly registerService: RegisterService,
    private readonly router: Router
  ) { }
  tipo_negocio: TipoNegocio[] | undefined;
  selectedTipoNegocio: TipoNegocio | undefined;
  checked: boolean = false;
  nombre: string = '';
  email: string = '';
  apellidos: string = '';
  cedula: number = 0;
  telefono: string = '';
  password: string = '';
  confirmar_password: string = '';
  mostrarPassword: boolean = false;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    nombre: ['', [Validators.required]],
    apellidos: ['', [Validators.required]],
    cedula: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmar_password: ['', [Validators.required, Validators.minLength(6)]],
    telefono: ['', [Validators.required, Validators.minLength(10)]],
    nombre_negocio: ['', [Validators.required]],
    tipo_negocio: ['', [Validators.required]],
    checked:['', [Validators.required]],
    recaptchaToken: ['']
  },{ validators: this.passwordsIguales('password', 'confirmar_password') });

  registrarData(): Subscription {
    if (this.form.valid) {
      this.activatedLoader.activateSignal();
      return this.recaptchaService.execute('registrarData').subscribe((token) => {
        this.form.get('recaptchaToken')?.setValue(token);

        const data = this.form.value;
        const data_service = {
          email: data.email,
          name: data.nombre,
          document: data.cedula,
          lastName: data.apellidos,
          password: data.password,
          checkPersonalData: data.checked,
          confirm_password: data.confirmar_password,
          tipeBusiness: data.tipo_negocio.id, // si es objeto
          nameBussiness: data.nombre_negocio,
          recaptchaToken: data.recaptchaToken
        };

        this.registerService.registrarData_service(data_service).subscribe({
          next: (res) => {
            this.activatedLoader.deactivateSignal();
            // this.messageService.add({ severity: 'success', summary: 'Registro exitoso' });
            this.router.navigate(['./']);
          },
          error: (err) => {
            this.activatedLoader.deactivateSignal();
            // this.messageService.add({
            //   severity: 'error',
            //   summary: 'Error',
            //   detail: err.error?.message || 'Ocurrió un error al realizar el registro'
            // });
          }
        });
      });
    } else {
      this.form.markAllAsTouched();
      return new Subscription();
    }
  }

  passwordsIguales(pass1: string, pass2: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const form = formGroup as FormGroup;
      const password = form.get(pass1)?.value;
      const confirmarPassword = form.get(pass2)?.value;

      if (password === confirmarPassword) {
        return null; // No hay error
      } else {
        return { passwordsNoCoinciden: true }; // Hay error
      }
    }
  }

  ngOnInit() {
    this.get_tipo_negocio();
    this.activatedLoader.deactivateSignal();
  }

  ngOnDestroy(){
    this.registrarData().unsubscribe();
    this.get_tipo_negocio().unsubscribe();
  }

  irLogin(){
    this.router.navigate(['./']);
  }
  get_tipo_negocio() : Subscription {
    return this.registerService.get_tipo_de_negocio().subscribe({
      next: (res) => {
        console.log(res);
        this.tipo_negocio = res
      },
      error: (err) => {
        // this.messageService.add({
        //   severity: 'error',
        //   summary: 'Error',
        //   detail: err.error?.message || 'Ocurrió un error al cargar los tipos de negocio'
        // });
      }
    });
  }

}
