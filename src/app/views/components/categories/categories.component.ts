import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild, effect, OnChanges, SimpleChanges } from '@angular/core';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { ActivateLoaderService } from 'src/app/services/activate-loader.service';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from '../../services/category.service';
import { DataTable } from 'simple-datatables'
import { CommonModule } from '@angular/common';
import { dataCategory } from 'src/app/interfaces/data-datatable';

@Component({
  selector: 'app-categories',
  imports: [
    CreateCategoryComponent,
    CommonModule
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export default class CategoriesComponent implements AfterViewInit {


  @ViewChild('category') category!: ElementRef;
  categories : (string | boolean)[][] = [];

  private readonly loaderService = inject(ActivateLoaderService);
  private readonly categoryService = inject(CategoryService);

  customDataTableOptions = {
    searchable: true,
    paging: true,
  }

  data : dataCategory = {
    headings: [
        'name',
        'description',
        'isActive',
        'options'
    ],
    data: [],
  };


  ngAfterViewInit(): void {
    this.categoryService.getCategories(localStorage.getItem('auth_token')!).subscribe({
      next: (res) => {
        this.categories = res.map(c => [
          c.name,
          c.description,
          c.isActive ? 'Activo' : 'Inactivo',
          '<button type="button" class="button-internal-module">Editar</button>',
        ])
        this.data.data = this.categories;

       new DataTable(this.category.nativeElement,{
          searchable: true,
          paging: true,
          data: this.data,
        })
      },
      error: (err) => {
        console.error('Error en la solicitud de categorías:', err);

      }
    });
  }
}
