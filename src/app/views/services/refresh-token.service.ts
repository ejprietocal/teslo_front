import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';
import { ActivateLoaderService } from '../../services/activate-loader.service';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RefreshTokenService {

  private readonly environments = environment;


  constructor(
    private http : HttpClient,
    private router : Router,
    private readonly activateLoader : ActivateLoaderService,
  ) {}

  public datosUser = signal<User | null>(null);

  checkToken(): void {
    this.activateLoader.activateSignal();
    const token = localStorage.getItem('auth_token');
    if (token) {
      this.http.get<any>(this.environments.URL_CHECK_TOKEN, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).subscribe({
        next: (res) => {
          this.activateLoader.deactivateSignal();
          this.activateLoader.deactivateInternalSignal();
          if (res.token) {
            this.datosUser.set(res);
            localStorage.setItem('auth_token', res.token);
            // console.log(res.token);
            // Evitar redirigir al dashboard si ya estás en alguna ruta dentro de dashboard
            if (this.router.url !== '/dashboard' && !this.router.url.startsWith('/dashboard')) {
              this.router.navigate(['/dashboard']);
            }
          } else {
            this.router.navigate(['/']);
          }
        },
        error: (err) => {
          console.error('Error en la solicitud de login:', err);
          this.activateLoader.deactivateSignal();
          localStorage.removeItem('auth_token');
          this.router.navigate(['/']);
        }
      });
    } else {
      this.router.navigate(['/']);
      console.log('no hay token');
    }
  }
}
