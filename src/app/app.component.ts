import { AfterViewChecked, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { ActivateLoaderService } from './services/activate-loader.service';
import { DarkModeService } from './views/services/dark-mode.service';
import { initFlowbite } from 'flowbite';
import { ToastComponent } from './components/toast/toast.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    LoaderComponent,
    ToastComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements AfterViewChecked {


  public readonly darkModeService = inject(DarkModeService);
  title = 'teslo_front';

  constructor(
    public readonly loaderService : ActivateLoaderService,
  ){}

  ngAfterViewChecked(): void {
    initFlowbite();
  }



  themeChecked: boolean = false;  // Variable para almacenar el estado de `checked` desde el hijo
  onCheckedChange(value: boolean): void {
    this.themeChecked = value; // Actualizar la propiedad `themeChecked` en el padre
  }


}
