import { CommonModule } from '@angular/common';
import { Component, inject, Signal, signal } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../interfaces/user';
import { Router } from '@angular/router';
import { faBars, faSun, faMoon, faGrip, faRightFromBracket} from '@fortawesome/free-solid-svg-icons'

import { ToastModule } from 'primeng/toast';
import { LoginService } from '../../services/login.service';
import { DarkModeService } from '../../services/dark-mode.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    PasswordModule,
    InputGroupModule,
    InputGroupAddonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    FontAwesomeModule

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  value: string = '';
  password: string = '';

  faBars = faBars;
  faSun = faSun;
  faMoon = faMoon;
  faGrip = faGrip;

  public datosUser = signal<User | null>(null);

  fb = inject(FormBuilder);

  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router,
    public readonly darkModeService : DarkModeService,
  ) { }


  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit(): void {
    if (this.form.valid) {
      this.loginService.login(this.form);
    }
  }

  registration(): void {
    this.router.navigate(['/register']);
  }
}
