import { Component, EventEmitter, Output, signal, Signal } from '@angular/core';

import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Importa FormsModule


@Component({
  selector: 'app-top-menu',
  imports: [
    CommonModule,
    ToggleSwitchModule,
    FormsModule
  ],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css'
})
export class TopMenuComponent {

  checked: boolean = false;

  toggleDarkMode() {
    const element = document.querySelector('html')!;
    element.classList.toggle('dark');
  }

}
