import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { RetrieveAccount } from 'src/app/interfaces/retrieve-account';

@Injectable({
  providedIn: 'root'
})
export class RetrieveAccountService {

  private readonly environments  = environment;
  private readonly http = inject(HttpClient);

  retrieveAccount(form: RetrieveAccount)  {
    return this.http.patch<any>(this.environments.URL_RETRIEVE_ACCOUNT, form)
  }

}
