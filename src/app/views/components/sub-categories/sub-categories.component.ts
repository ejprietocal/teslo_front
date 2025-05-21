import { Component } from '@angular/core';
import { CreateUpdateSubCategoryComponent } from './create-update-sub-category/create-update-sub-category.component';
import { DeleteSubCategoryComponent } from './delete-sub-category/delete-sub-category.component';

@Component({
  selector: 'app-sub-categories',
  imports: [
    CreateUpdateSubCategoryComponent,
    DeleteSubCategoryComponent,
  ],
  templateUrl: './sub-categories.component.html',
  styleUrl: './sub-categories.component.css'
})
export default class SubCategoriesComponent {

}
