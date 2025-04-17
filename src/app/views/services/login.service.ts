import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  toast: any;

  constructor(
    private http : HttpClient,
    private router : Router,
    private messageService: MessageService
  ) { }

  public datosUser = signal<User | null>(null);

  login(form: FormGroup) : void {
    this.http.post<any>('http://localhost:3000/api/auth/login', form.value).subscribe({
      next: (res) => {
        // Cuando el login es exitoso, actualizamos la señal
        this.datosUser.set(res);
        // this.showToast( 'success', 'Login exitoso', 'Has iniciado sesión correctamente', 1000);
        localStorage.setItem('auth_token', res.token!);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Error en la solicitud de login:', err);
        localStorage.removeItem('auth_token');
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Email o contraseña inválidos',
          life: 2000
        });
      }
    });
  }
}
