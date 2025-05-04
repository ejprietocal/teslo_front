import { Injectable, signal, ViewChildren } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {


  readonly darkMode = signal(false);
  private readonly element = document.querySelector('html')!;
  private readonly mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  constructor() {
    // Establecer el estado inicial según las preferencias del sistema
    const prefersDark = this.mediaQuery.matches;
    this.darkMode.set(prefersDark);
    this.element.classList.toggle('dark', prefersDark);



    // Escuchar cambios en la preferencia del sistema
    this.mediaQuery.addEventListener('change', e => {
      this.darkMode.set(e.matches);
      this.element.classList.toggle('dark', e.matches);
    });



  }

  toggleDarkMode() {
    this.darkMode.update(v => !v);
    this.element.classList.toggle('dark', this.darkMode());
  }

}
