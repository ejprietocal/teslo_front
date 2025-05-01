import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ToggleMenuService } from '../../services/toggle-menu.service';
import { faBars, faSun, faMoon, faGrip, faRightFromBracket, faXmark, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DarkModeService } from '../../services/dark-mode.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Tooltip } from 'primeng/tooltip';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-top-menu',
  imports: [
    FontAwesomeModule,
    CommonModule,
    Tooltip,
  ],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css'
})
export class TopMenuComponent  {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;



  public readonly drawerService = inject(ToggleMenuService);
  public readonly darkModeService = inject(DarkModeService);
  public readonly router = inject(Router);


  faBars = faBars;
  faSun = faSun;
  faMoon = faMoon;
  faGrip = faGrip;
  faXmark = faXmark;
  faRightFromBracket = faRightFromBracket;
  faUser = faUser;

  logout() {
    localStorage.removeItem('auth_token');
    this.router.navigate(['']);
  }
}
