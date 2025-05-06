import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly environments  = environment;
  private readonly http = inject(HttpClient)

  login(form: FormGroup)  {
    return this.http.post<any>(this.environments.URL_LOGIN, form.value)
  }
}
