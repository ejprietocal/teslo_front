import { Component, inject } from '@angular/core';
import { ActivateLoaderService } from 'src/app/services/activate-loader.service';

@Component({
  selector: 'app-variants',
  imports: [
  ],
  templateUrl: './variants.component.html',
  styleUrl: './variants.component.css'
})
export default class VariantsComponent {

  public readonly loaderService = inject(ActivateLoaderService);

  ngOnInit(): void {
    this.loaderService.deactivateInternalSignal();
  }
}
