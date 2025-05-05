import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { User } from '../../interfaces/user';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  public datosUser = signal<User | null>(null);
  private readonly API_URL = environment.URL_REGISTER; // variable de entorno

  constructor(private http: HttpClient) {}

  registrarData_service(data_service: any): Observable<any> {
    return this.http.post<any>(this.API_URL, data_service);
  }
}


