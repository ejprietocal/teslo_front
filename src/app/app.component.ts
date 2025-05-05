import { AfterViewInit, Component, ElementRef, inject, OnInit, QueryList, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from './views/components/top-menu/top-menu.component';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { ActivateLoaderService } from './services/activate-loader.service';
import { ToastModule } from 'primeng/toast';
import { DarkModeService } from './views/services/dark-mode.service';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    LoaderComponent,
    ToastModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {


  public readonly loaderService = inject(ActivateLoaderService);
  public readonly darkModeService = inject(DarkModeService);



  title = 'teslo_front';


  themeChecked: boolean = false;  // Variable para almacenar el estado de `checked` desde el hijo
  onCheckedChange(value: boolean): void {
    this.themeChecked = value; // Actualizar la propiedad `themeChecked` en el padre
  }


}
