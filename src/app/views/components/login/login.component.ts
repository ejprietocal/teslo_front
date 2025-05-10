import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../interfaces/user';
import { Router } from '@angular/router';
import { faBars, faSun, faMoon, faGrip} from '@fortawesome/free-solid-svg-icons'
import { LoginService } from '../../services/login.service';
import { DarkModeService } from '../../services/dark-mode.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReCaptchaV3Service } from 'ng-recaptcha-2';
import { ActivateLoaderService } from '../../../services/activate-loader.service';
import { Subscription } from 'rxjs';
import { ToastService } from 'src/app/services/toast.service';


@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {



  value: string = '';
  password: string = '';

  faBars = faBars;
  faSun = faSun;
  faMoon = faMoon;
  faGrip = faGrip;

  public datosUser = signal<User | null>(null);

  fb = inject(FormBuilder);
  recaptchaService = inject(ReCaptchaV3Service);
  activateLoader = inject(ActivateLoaderService);
  toast = inject(ToastService);
  loginService = inject(LoginService);
  router = inject(Router);

  constructor(
    public readonly darkModeService : DarkModeService,
  ) { }


  ngOnInit(): void {
    this.activateLoader.deactivateSignal();
  }


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
            this.toast.show({
              message: err.error.message,
              icon: '',
              color: 'error',
              duration: 5000
            });
          }
        });
    })
  }

  retrieveAccount(): void {
    this.router.navigate(['/retrieve-account']);
  }

  registration(): void {
    this.router.navigate(['/register']);
  }
}
