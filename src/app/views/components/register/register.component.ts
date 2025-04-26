import { CommonModule } from '@angular/common';
import { Component, inject, Signal, signal } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../interfaces/user';
import { Router } from '@angular/router';


import { ToastModule } from 'primeng/toast';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    PasswordModule,
    InputGroupModule,
    InputGroupAddonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,

  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor (
    private readonly registerService: RegisterService,
    private readonly router: Router
  ) { }

  nombre: string = '';
  email: string = '';
  apellidos: string = '';
  cedula: number = 0;
  telefono: string = '';
  ciudad: string = '';
  password: string = '';
  confermar_password: string = '';

  public datosUser = signal<User | null>(null);

  fb = inject(FormBuilder);

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    nombre: ['', [Validators.required]],
    apellidos: ['', [Validators.required]],
    cedula: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confermar_password: ['', [Validators.required, Validators.minLength(6)]],
    telefono: ['', [Validators.required, Validators.minLength(10)]],
    ciudad: ['', [Validators.required]],
  });

  registrarData(): void {
    console.log('llego al componente');
    if (this.form.valid) {
      this.registerService.registrarData_service(this.form);
    }else{
      this.form.value
    }
  }

}
