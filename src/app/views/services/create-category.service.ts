import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateCategoryService {

  private readonly environments  = environment;
  private readonly http = inject(HttpClient)

  createCategory(form: FormGroup)  {
    return this.http.post<any>(this.environments.URL_CREATE_CATEGORY, form.value)
  }
}
