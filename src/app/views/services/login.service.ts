import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from '@environments/environment';
import { PayloadUser } from 'src/app/interfaces/payload-user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly environments  = environment;
  private readonly http = inject(HttpClient)
  seePass = signal(false);

  login(form: FormGroup)  {
    return this.http.post<any>(this.environments.URL_LOGIN, form.value)
  }

  loginWithBusiness(payload: PayloadUser, token: string)  {
    return this.http.post<any>(this.environments.URL_LOGIN_BUSINESS, payload, {
       headers: {
          'Authorization': `Bearer ${token}`
        }
    })
  }

  seePassword(){
    this.seePass.update(v => !v);
  }
}
