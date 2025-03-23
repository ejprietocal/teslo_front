import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from './views/components/top-menu/top-menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    TopMenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teslo_front';

  themeChecked: boolean = false;  // Variable para almacenar el estado de `checked` desde el hijo
  onCheckedChange(value: boolean): void {
    this.themeChecked = value; // Actualizar la propiedad `themeChecked` en el padre
  }


}
