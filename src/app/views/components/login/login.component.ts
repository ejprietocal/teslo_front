import { CommonModule } from '@angular/common';
import { Component, inject, Signal, signal } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../interfaces/user';


import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';



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
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  value: string = '';
  password: string = '';

  public datosUser = signal<User | null>(null);

  fb = inject(FormBuilder);

  constructor(
    private http : HttpClient,
    private toast: MessageService,
  ) { }

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit(): void {
    if (this.form.valid) {
      this.http.post<User>('http://localhost:3000/api/auth/login', this.form.value).subscribe({
        next: (res) => {
          // Cuando el login es exitoso, actualizamos la señal
          this.datosUser.set(res);
          this.showToast( 'success', 'Login exitoso', 'Has iniciado sesión correctamente', 1000);
        },
        error: (err) => {
          console.error('Error en la solicitud de login:', err);
          // Maneja el error aquí si es necesario
          this.showToast('error', 'Error', 'Error Email o contraseña inválidos', 1000);
        }
      });
    }
  }

  showToast(severity :string ,summary:string, message: string, life: number) {
    this.toast.add({ severity: severity, summary: summary, detail: message, life: life });
  }

}
