import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../interfaces/user';
import { Router } from '@angular/router';
import { faBars, faSun, faMoon, faGrip} from '@fortawesome/free-solid-svg-icons'

import { LoginService } from '../../services/login.service';
import { DarkModeService } from '../../services/dark-mode.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReCaptchaV3Service } from 'ng-recaptcha-2';
import { ActivateLoaderService } from '../../../services/activate-loader.service';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    PasswordModule,
    InputGroupModule,
    InputGroupAddonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {

  value: string = '';
  password: string = '';

  faBars = faBars;
  faSun = faSun;
  faMoon = faMoon;
  faGrip = faGrip;

  public datosUser = signal<User | null>(null);

  loginSuscription : Subscription | undefined;

  fb = inject(FormBuilder);
  recaptchaService = inject(ReCaptchaV3Service);
  activateLoader = inject(ActivateLoaderService);
  messageService = inject(MessageService);

  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router,
    public readonly darkModeService : DarkModeService,
  ) { }


  ngOnDestroy(): void {
    this.onSubmitLogin().unsubscribe();
  }

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    recaptchaToken: ['']
  });

  onSubmitLogin(): Subscription {
    this.activateLoader.activateSignal();
    return this.recaptchaService.execute('submitLogin').subscribe((token) =>{
      this.form.get('recaptchaToken')?.setValue(token);
        this.loginService.login(this.form).subscribe({
          next: (res) => {
            this.datosUser.set(res);
            localStorage.setItem('auth_token', res.token!);
          },
          complete: () => {
            this.router.navigate(['/dashboard']);
            this.activateLoader.deactivateSignal();
          },
          error: (err) => {
            console.error('Error en la solicitud de login:', err);
            this.activateLoader.deactivateSignal();
            localStorage.removeItem('auth_token');
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: err.error.message,
              life: 2000
            });
          }
        });
    })
  }

  registration(): void {
    this.router.navigate(['/register']);
  }
}
