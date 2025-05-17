import { Component, inject } from '@angular/core';
import { ActivateLoaderService } from 'src/app/services/activate-loader.service';

@Component({
  selector: 'app-sub-categories',
  imports: [],
  templateUrl: './sub-categories.component.html',
  styleUrl: './sub-categories.component.css'
})
export default class SubCategoriesComponent {

  public readonly loaderService = inject(ActivateLoaderService);


  ngOnInit(): void {
    this.loaderService.deactivateInternalSignal();
  }
}
