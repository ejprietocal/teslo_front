import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';
import { ActivateLoaderService } from '../../services/activate-loader.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RefreshTokenService {

  private readonly urlCheckToken = environment.URL_CHECK_TOKEN_CLOUD;

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
      this.http.get<any>(this.urlCheckToken, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).subscribe({
        next: (res) => {
          this.activateLoader.deactivateSignal();
          if (res.token) {
            this.datosUser.set(res);
            localStorage.setItem('auth_token', res.token);
            this.router.navigate(['/dashboard']);
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
    }
    else {
      this.router.navigate(['/']);
      console.log('no hay token');
    }
  }
}
