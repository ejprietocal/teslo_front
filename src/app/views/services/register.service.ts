import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ActivateLoaderService } from '../../services/activate-loader.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http : HttpClient,
    private router : Router,
    private messageService: MessageService,
    private readonly activateLoader : ActivateLoaderService,
  ) { }

  public datosUser = signal<User | null>(null);
  Login = inject(LoginService);


  registrarData_service(form:FormGroup):void{
    this.activateLoader.activateSignal();
    console.log(form.value);
    return;
    this.http.post<any>('https://tesloback-production.up.railway.app/api/register', form.value).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Registro exitoso',
          detail: 'Ahora puedes iniciar sesión'
        })
        this.router.navigate(['/login']);
      },
      error: (err) => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: err.error?.message || 'Ocurrió un error al registrarse'
      });
      this.activateLoader.deactivateSignal();

      }
    });
  }

}
