import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateItemsService {

  constructor() { }
   private readonly http = inject(HttpClient);


  craeteProductoService(data_service: any) {
    console.log(data_service);
    // return;
    return this.http.post<any>('https://tesloback-production.up.railway.app/api/business/create_producto', data_service);
  }



}
