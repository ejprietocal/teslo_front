import { Component, EventEmitter, inject, Output, signal, Signal, ViewChild } from '@angular/core';

import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { ButtonModule } from 'primeng/button';
import { ToggleMenuService } from '../../services/toggle-menu.service';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-top-menu',
  imports: [
    CommonModule,
    ToggleSwitchModule,
    FormsModule,
    ButtonModule,
    FontAwesomeModule,

  ],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css'
})
export class TopMenuComponent {

  faBars = faBars;

  public readonly drawerService = inject(ToggleMenuService);
  checked: boolean = false;


  toggleDarkMode() {
    const element = document.querySelector('html')!;
    element.classList.toggle('dark');
  }

}
