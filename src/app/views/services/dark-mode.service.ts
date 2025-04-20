import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  readonly darkMode = signal(false);
  private readonly element = document.querySelector('html')!;

  toggleDarkMode() {
    this.darkMode.update(v => !v);
    this.element.classList.toggle('dark');
  }


}
