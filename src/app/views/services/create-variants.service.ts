import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateVariantsService {

  constructor() { }

  private readonly environments  = environment;
  private readonly http = inject(HttpClient)

  createNewVariante(form: FormGroup){
    // return this.http.post<any>(this.environments.URL_CREATE_CATEGORY, form.value)
    console.log(form.value);
    return this.http.post<any>('https://tesloback-production.up.railway.app/api/variants/create_variante', form.value)
  }
}
