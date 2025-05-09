import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReCaptchaV3Service } from 'ng-recaptcha-2';
import { ActivateLoaderService } from 'src/app/services/activate-loader.service';
import { MessageService } from 'primeng/api';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { ResetPasswordService } from '../../services/reset-password.service';

@Component({
  selector: 'app-reset-password',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent implements OnInit {

  route = inject(ActivatedRoute);
  router = inject(Router);
  fb = inject(FormBuilder);
  resetPasswordService = inject(ResetPasswordService);
  recaptchaService = inject(ReCaptchaV3Service);
  activateLoader = inject(ActivateLoaderService);
  messageService = inject(MessageService);

    faArrowLeft = faArrowLeft;

  jwtAuth : string | undefined | null;

  form : FormGroup = this.fb.group({
    recaptchaToken: [''],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirm_password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmitResetPassword(): Subscription {
    this.activateLoader.activateSignal();
    return this.recaptchaService.execute('submitResetPassword').subscribe((token) =>{
      this.form.get('recaptchaToken')?.setValue(token);
      this.recaptchaService.execute('submitResetPassword').subscribe((token) => {
        this.form.get('recaptchaToken')?.setValue(token);
        this.resetPasswordService.resetPassword(this.form.value, this.jwtAuth).subscribe({
          next: (res) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Éxito',
              detail: 'Tu cuenta ha sido recuperada, por favor ingresa con tu nueva contraseña',
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

  ngOnDestroy(): void {
     this.onSubmitResetPassword().unsubscribe();
  }

  ngOnInit(): void {
    this.jwtAuth = this.route.snapshot.paramMap.get('token');
  }



}
