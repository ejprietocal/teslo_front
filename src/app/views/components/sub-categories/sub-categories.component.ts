import { Component, effect, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { CreateUpdateSubCategoryComponent } from './create-update-sub-category/create-update-sub-category.component';
import { DeleteSubCategoryComponent } from './delete-sub-category/delete-sub-category.component';
import { DataTable } from 'simple-datatables';
import { ActivateLoaderService } from 'src/app/services/activate-loader.service';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../services/category.service';
import { Category } from 'src/app/interfaces/category';
import { Subscription } from 'rxjs';

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

  @ViewChild('subCategoryWrapper') subCategory!: ElementRef;
  public mode = signal<string>('');
  public dataTableInstance?: DataTable;
  private readonly loaderService = inject(ActivateLoaderService);
  private readonly toastr = inject(ToastrService);
  public readonly categoryService = inject(CategoryService);
  public categories : Category[] = [];
  public getCategoriesSuscription?: Subscription;

  ngAfterViewInit(): void {
    this.getCategoriesSuscription = this.categoryService.getCategories().subscribe({
      next: (res) => {
        console.log(res);
        this.categories = res;
      },
    });
  }

  constructor(){
    effect(() => {

    });
  }
}
