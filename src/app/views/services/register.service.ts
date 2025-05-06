import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { User } from '../../interfaces/user';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { TipoNegocio } from 'src/app/interfaces/tipo-negocio';
import { DataRegister } from 'src/app/interfaces/data-register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public datosUser = signal<User | null>(null);
  private readonly API_URL = environment.URL_REGISTER; // variable de entorno

  constructor(private http: HttpClient) {}

  registrarData_service(data_service: DataRegister) {
    console.log(data_service);
    return this.http.post<any>(this.API_URL, data_service);
  }

  get_tipo_de_negocio()  {
    return this.http.get<TipoNegocio[]>('https://tesloback-production.up.railway.app/api/business/business_types');
  }
}


