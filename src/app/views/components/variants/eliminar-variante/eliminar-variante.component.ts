import { Component, Input, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-eliminar-variante',
  imports: [],
  templateUrl: './eliminar-variante.component.html',
  styleUrl: './eliminar-variante.component.css'
})
export class EliminarVarianteComponent {
 @Input({ required : true }) actionCreateVariante! : WritableSignal<boolean>;
}
