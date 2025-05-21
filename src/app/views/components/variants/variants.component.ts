import { AfterViewInit, Component, ElementRef, inject,ViewChild, effect, signal } from '@angular/core';
import { ActivateLoaderService } from 'src/app/services/activate-loader.service';
import { CreateVariantsComponent } from './create-variants/create-variants.component';
import { CreateVariantsService } from '../../services/create-variants.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-variants',
  imports: [
    CreateVariantsComponent,CommonModule
  ],
  templateUrl: './variants.component.html',
  styleUrl: './variants.component.css'
})
export default class VariantsComponent {

  constructor(){
    // effect(() => {
    //   if (this.variantsCreated()) {
    //     this.fetchVariants();
    //     this.variantsCreated.set(false); // resetear señal
    //   }
    // });
  }

  // private readonly loaderService = inject(ActivateLoaderService);
  public readonly loaderService = inject(ActivateLoaderService);
  public readonly variantService = inject(CreateVariantsService);
  //  @ViewChild('categoryWrapper') category!: ElementRef;
  // variantsCreated: signal(false);

  // variantsCreated() {
  //   throw new Error('Method not implemented.');
  // }
  // fetchVariants() {
  //   throw new Error('Method not implemented.');
  // }


  ngOnInit(): void {
    this.loaderService.deactivateInternalSignal();
  }
}
// function effect(arg0: () => void) {
//   throw new Error('Function not implemented.');
// }

// function ngOnInit() {
//   throw new Error('Function not implemented.');
// }

