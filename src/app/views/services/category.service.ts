import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly environments  = environment;
  private readonly http = inject(HttpClient)

  createCategory(form: FormGroup): Observable<any> {
    return this.http.post<any>(this.environments.URL_CREATE_CATEGORY, form.value)
  }

  getCategories() : Observable<Category[]> {
    return this.http.get<Category[]>(this.environments.URL_GET_CATEGORIES);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(`${this.environments.URL_DELETE_CATEGORY}/${id}`);
  }
}
