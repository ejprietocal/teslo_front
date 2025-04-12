import { CommonModule } from '@angular/common';
import { Component, inject, Signal, signal } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../interfaces/user';


import { ToastModule } from 'primeng/toast';
import { LoginService } from '../../services/login.service';



@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    PasswordModule,
    InputGroupModule,
    InputGroupAddonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
  ],

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  value: string = '';
  password: string = '';

  public datosUser = signal<User | null>(null);

  fb = inject(FormBuilder);

  constructor(
    private readonly loginService: LoginService,
  ) { }

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit(): void {
    if (this.form.valid) {
      this.loginService.login(this.form);
    }
  }


}
