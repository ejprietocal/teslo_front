import { Component, inject } from '@angular/core';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { ActivateLoaderService } from 'src/app/services/activate-loader.service';

@Component({
  selector: 'app-categories',
  imports: [
    CreateCategoryComponent
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export default class CategoriesComponent {

  public readonly loaderService = inject(ActivateLoaderService);

  ngOnInit(): void {
    this.loaderService.deactivateInternalSignal();
  }
}
