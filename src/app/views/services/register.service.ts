import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http : HttpClient,
    private router : Router,
    private messageService: MessageService
  ) { }

  public datosUser = signal<User | null>(null);

  registrarData_service(form:FormGroup):void{
    console.log(form.value);
  }

}
