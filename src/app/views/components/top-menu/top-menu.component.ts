import { Component, inject } from '@angular/core';
import { ToggleMenuService } from '../../services/toggle-menu.service';
import { faBars, faSun, faMoon, faGrip, faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DarkModeService } from '../../services/dark-mode.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-top-menu',
  imports: [
    FontAwesomeModule,
  ],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css'
})
export class TopMenuComponent {

  public readonly drawerService = inject(ToggleMenuService);
  public readonly darkModeService = inject(DarkModeService);
  public readonly router = inject(Router);

  faBars = faBars;
  faSun = faSun;
  faMoon = faMoon;
  faGrip = faGrip;
  faRightFromBracket = faRightFromBracket;

  logout() {
    localStorage.removeItem('auth_token');
    this.router.navigate(['']);
  }
}
