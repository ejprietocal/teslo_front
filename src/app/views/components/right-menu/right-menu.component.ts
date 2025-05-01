import { Component, inject } from '@angular/core';
import { ToggleMenuService } from '../../services/toggle-menu.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark, faWebAwesome,faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Tooltip } from 'primeng/tooltip';


@Component({
  selector: 'app-right-menu',
  imports: [
    CommonModule,
    FontAwesomeModule,
    Tooltip
  ],
  templateUrl: './right-menu.component.html',
  styleUrl: './right-menu.component.css'
})
export class RightMenuComponent {

  readonly drawerService = inject(ToggleMenuService);
  private readonly router = inject(Router);

  faXmark = faXmark;
  faWebAwesome = faWebAwesome;
  faRightFromBracket = faRightFromBracket;
  faUser = faUser;

  logout() {
    localStorage.removeItem('auth_token');
    this.router.navigate(['']);
  }

}
