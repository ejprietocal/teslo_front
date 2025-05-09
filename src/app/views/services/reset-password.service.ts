import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { ResetPassword } from 'src/app/interfaces/reset-password';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  private readonly environments  = environment;
  private readonly http = inject(HttpClient);

  resetPassword(form: ResetPassword, jwtAuth: string | undefined | null)  {
    return this.http.patch<any>(`${this.environments.URL_RESET_PASSWORD}/${jwtAuth}`, form)
  }

}
