import { AfterViewInit, Component, ElementRef, inject, ViewChild, effect, signal } from '@angular/core';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { ActivateLoaderService } from 'src/app/services/activate-loader.service';
import { CategoryService } from '../../services/category.service';
import { DataTable } from 'simple-datatables'
import { CommonModule } from '@angular/common';
import { dataCategory } from 'src/app/interfaces/data-datatable';
import { Subscription } from 'rxjs';

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

  constructor(){
    effect(() => {
      if (this.categoryCreated()) {
        this.fetchCategories();
        this.categoryCreated.set(false); // resetear señal
      }
    });
  }


  @ViewChild('categoryWrapper') category!: ElementRef;
  categories : (string | boolean)[][] = [];

  private readonly loaderService = inject(ActivateLoaderService);
  private readonly categoryService = inject(CategoryService);
  public dataTableInstance?: DataTable;
  private categorySuscription?: Subscription;

  categoryCreated = signal(false);

  customDataTableOptions = {
    searchable: true,
    paging: true,
  }

  datos : dataCategory = {
    headings: [
        'nombre',
        'descripcion',
        'estado',
        'opciones'
    ],
    data: []
  };

  fetchCategories(): void {
    const token = localStorage.getItem('auth_token');
    if (!token) return;

    this.categorySuscription = this.categoryService.getCategories().subscribe({
      next: (res) => {
        this.categories = res.map(c => [
          c.name,
          c.description,
          c.isActive ? '<div class="text-center w-full"><span class="fa fa-check text-green-500"></span> Activo</div>' : '<div class="text-center w-full"><span class="fa fa-times text-red-500"></span> Inactivo</div>',
          `
            <div class="flex justify-center items-center gap-5">
              <button type="button" class="button-edit"><span class="fa fa-edit"></span> Editar</button>
              <button type="button" class="button-cancel"><span class="fa fa-trash"></span> Eliminar</button>
            </div>
          `,

        ]);

        this.datos.data = this.categories;

        if (this.dataTableInstance) {
          this.dataTableInstance.destroy();
        }

        this.dataTableInstance = new DataTable(this.category.nativeElement,{
          searchable: true,
          paging: true,
          sortable: true,
          classes:{
            active: "datatable-active",
            bottom: "datatable-bottom",
            container: "datatable-container",
            cursor: "datatable-cursor",
            dropdown: "datatable-dropdown",
            ellipsis: "datatable-ellipsis",
            empty: "datatable-empty",
            headercontainer: "datatable-headercontainer",
            info: "datatable-info",
            input: "datatable-input",
            loading: "datatable-loading",
            pagination: "datatable-pagination",
            paginationList: "datatable-pagination-list",
            search: "datatable-search",
            selector: "datatable-selector",
            sorter: "datatable-sorter",
            table: "datatable-table bg-color",
            top: "datatable-top text-center",
            wrapper: "datatable-wrapper text-center",
          },

          data: this.datos,
        });

      },
      error: (err) => {
        console.error('Error al obtener categorías:', err);
      }
    });
  }



  ngAfterViewInit(): void {
    this.fetchCategories();
  }

  ngOnDestroy(): void {
      this.categorySuscription?.unsubscribe();
  }
}
