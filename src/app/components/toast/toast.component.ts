import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';


@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'], // Si tienes estilos específicos
  imports: [
    CommonModule
  ], // Importamos dependencias
})
export class ToastComponent {
  toastService = inject(ToastService);  // Inyectamos el servicio

  // Si necesitas otras propiedades o métodos, los añades aquí.
}
