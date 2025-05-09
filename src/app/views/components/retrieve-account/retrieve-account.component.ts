import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha-2';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ActivateLoaderService } from 'src/app/services/activate-loader.service';
import { RetrieveAccountService } from '../../services/retrieve-account.service';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-retrieve-account',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  templateUrl: './retrieve-account.component.html',
  styleUrl: './retrieve-account.component.css'
})
export class RetrieveAccountComponent implements OnInit {

  fb = inject(FormBuilder);
  recaptchaService = inject(ReCaptchaV3Service);
  activateLoader = inject(ActivateLoaderService);
  retrieveAccountService = inject(RetrieveAccountService);
  messageService = inject(MessageService);
  router = inject(Router);

  faArrowLeft = faArrowLeft;

  form : FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    recaptchaToken: ['']
  });

  onSubmitRetrieveAccount(): Subscription {
    this.activateLoader.activateSignal();
    return this.recaptchaService.execute('submitRetrieveAccount').subscribe((token) =>{
      this.form.get('recaptchaToken')?.setValue(token);
      this.recaptchaService.execute('submitRetrieveAccount').subscribe((token) =>{
        this.form.get('recaptchaToken')?.setValue(token);
        this.retrieveAccountService.retrieveAccount(this.form.value).subscribe({
          next: (res) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Éxito',
              detail: 'Tu cuenta ha sido recuperada, se envio un correo con las instrucciones para completar el proceso',
              life: 5000
            });
          },
          complete: () => {
            this.activateLoader.deactivateSignal();
            this.router.navigate(['/']);
          },
          error: (err) => {
            console.error('Error en la solicitud de login:', err);
            this.activateLoader.deactivateSignal();
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: err.error.message,
              life: 2000
            });
          }
        });
      });
    });
  }

  ngOnInit(): void {
    this.activateLoader.deactivateSignal();
  }

  ngOnDestroy(): void {
    this.onSubmitRetrieveAccount().unsubscribe();
  }


}
