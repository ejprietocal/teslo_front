import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Variante } from 'src/app/interfaces/variante';

@Injectable({
  providedIn: 'root'
})
export class CreateVariantsService {

  private readonly environments  = environment;
  private readonly http = inject(HttpClient)

  createNewVariante(form: FormGroup):Observable<any>{
    console.log(form.value)

    return this.http.post<any>(this.environments.URL_CREATE_VARIANTE, form.value)
  }
  getVariants() :Observable<Variante[]>{
    return this.http.get<Variante[]>(this.environments.URL_GET_VARIANTE)
  }
}
