import { Component, inject } from '@angular/core';
import { ActivateLoaderService } from 'src/app/services/activate-loader.service';
import { CreateVariantsComponent } from './create-variants/create-variants.component';

@Component({
  selector: 'app-variants',
  imports: [
    CreateVariantsComponent
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
