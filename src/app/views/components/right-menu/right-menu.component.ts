import { Component, inject, signal } from '@angular/core';
import { ToggleMenuService } from '../../services/toggle-menu.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight ,faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { MenuItem } from 'src/app/interfaces/menu-item';


@Component({
  selector: 'app-right-menu',
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterLink,
    RouterLinkActive,

  ],
  templateUrl: './right-menu.component.html',
  styleUrl: './right-menu.component.css'
})
export class RightMenuComponent {

  readonly drawerService = inject(ToggleMenuService);
  readonly router = inject(Router);


  menuItems : MenuItem[] = [
    {
      name: 'Inventario',
      icon: 'fa-solid fa-warehouse',
      subMenus: [
        {
          name: 'productos',
          link: 'products',
          subMenus: [
            {
              name : 'items',
              icon: 'fa-solid fa-right-long',
              link: 'products/items'
            },
            {
              name: 'variantes',
              icon: 'fa-solid fa-right-long',
              link: 'products/variantes'
            },
            {
              name: 'categorías',
              icon: 'fa-solid fa-right-long',
              link: 'products/categories'
            },
            {
              name: 'subcategorías',
              icon: 'fa-solid fa-right-long',
              link: 'products/sub-categories'
            }
          ]
        },
      ]
    },
    {
      name: 'Gestión de cuenta',
      icon: 'fa-solid fa-user',
      subMenus: [
        {
          name: 'Gestión de cuenta',
          link: 'account'
        },
        {
          name: 'Gestión de usuarios',
          link: 'users'
        }
      ]
    },
  ]

  readonly screenSizeService = inject(ScreenSizeService);

  faChevronRight = faChevronRight;
  faChevronDown = faChevronDown;

  logout() {
    localStorage.removeItem('auth_token');
    this.router.navigate(['']);
  }

}
