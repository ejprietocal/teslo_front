import { Component, inject } from '@angular/core';
import { ToggleMenuService } from '../../services/toggle-menu.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark, faWebAwesome,faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { ScreenSizeService } from 'src/app/services/screen-size.service';



@Component({
  selector: 'app-right-menu',
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  templateUrl: './right-menu.component.html',
  styleUrl: './right-menu.component.css'
})
export class RightMenuComponent {

  readonly drawerService = inject(ToggleMenuService);
  private readonly router = inject(Router);

  readonly screenSizeService = inject(ScreenSizeService);


  faXmark = faXmark;
  faWebAwesome = faWebAwesome;
  faRightFromBracket = faRightFromBracket;
  faUser = faUser;

  logout() {
    localStorage.removeItem('auth_token');
    this.router.navigate(['']);
  }

}
