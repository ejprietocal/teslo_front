import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ActivateLoaderService } from '../../services/activate-loader.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  toast: any;

  private readonly urlLogin : string = environment.URL_LOGIN_CLOUD;


  constructor(
    private http : HttpClient,
    private router : Router,
    private messageService: MessageService,
    private readonly activateLoader : ActivateLoaderService,
  ) {}

  public datosUser = signal<User | null>(null);

  login(form: FormGroup) : void {
    this.activateLoader.activateSignal();
    this.http.post<any>(this.urlLogin, form.value).subscribe({
      next: (res) => {
        this.datosUser.set(res);
        this.activateLoader.deactivateSignal();
        localStorage.setItem('auth_token', res.token!);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Error en la solicitud de login:', err);
        this.activateLoader.deactivateSignal();
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
