import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  toast: any;

  constructor(
    private http : HttpClient,
  ) { }

  public datosUser = signal<User | null>(null);

  login(form: FormGroup) : void {
    this.http.post<any>('http://localhost:3000/api/auth/login', form.value).subscribe({
      next: (res) => {
        // Cuando el login es exitoso, actualizamos la señal
        this.datosUser.set(res);
        // this.showToast( 'success', 'Login exitoso', 'Has iniciado sesión correctamente', 1000);
        localStorage.setItem('auth_token', res.token!);
      },
      error: (err) => {
        console.error('Error en la solicitud de login:', err);
        localStorage.removeItem('auth_token');
        // this.showToast('error', 'Error', 'Error Email o contraseña inválidos', 1000);
      }
    });
  }

  // showToast(severity :string ,summary:string, message: string, life: number) {
  //   this.toast.add({ severity: severity, summary: summary, detail: message, life: life });
  // }
}
