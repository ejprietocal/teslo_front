import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly environments  = environment;

  constructor(
    private http : HttpClient,
  ) {}

  login(form: FormGroup)  {
    return this.http.post<any>(this.environments.URL_LOGIN, form.value)
  }
}
