import { AfterViewInit, Component, ElementRef, inject, ViewChild, effect, signal, Signal } from '@angular/core';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { ActivateLoaderService } from 'src/app/services/activate-loader.service';
import { CategoryService } from '../../services/category.service';
import { DataTable } from 'simple-datatables'
import { CommonModule } from '@angular/common';
import { dataCategory } from 'src/app/interfaces/data-datatable';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

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
  categories : (string | boolean | number )[][] = [];

  private readonly loaderService = inject(ActivateLoaderService);
  private readonly toastr = inject(ToastrService);
  private readonly categoryService = inject(CategoryService);
  public dataTableInstance?: DataTable;
  private categorySuscription?: Subscription;
  private categoryDeletedSuscription?: Subscription;
  public categoryCreated = signal(false);
  public categoryId = signal<number>(NaN);

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
    this.loaderService.activateInternalSignal();
    this.categorySuscription = this.categoryService.getCategories().subscribe({
      next: (res) => {
        this.categories = res.map(c => [
          c.name,
          c.description,
          c.isActive ? '<div class="text-center w-full"><span class="fa fa-check text-green-500"></span> Activo</div>' : '<div class="text-center w-full"><span class="fa fa-times text-red-500"></span> Inactivo</div>',
          c.id,
        ]);

        this.datos.data = this.categories;

        if (this.dataTableInstance) {
          this.dataTableInstance.destroy();
        }

        this.dataTableInstance = new DataTable(this.category.nativeElement,{
          searchable: true,
          paging: true,
          sortable: true,
          columns: [
            {
              select : 2,
              type: 'string',
              render : function(value, type, row, meta) {
                return value ? '<div class="text-center w-full"><span class="fa fa-check text-green-500"></span> Activo</div>' : '<div class="text-center w-full"><span class="fa fa-times text-red-500"></span> Inactivo</div>';
              }
            },
            {
              select: 3,
              type: 'string',
              render : function(value, type, row, meta) {
                return `
                  <div class="flex justify-center items-center gap-5 w-full">
                  <button type="button" data-id="${value}" data-action="edit" class="button-edit"><span class="fa-solid fa-pen-to-square"></span> Modificar</button>
                    <button type="button" data-id="${value}"  data-action="delete" class="button-cancel" data-modal-target="delete-modal" data-modal-toggle="delete-modal"><span class="fa-solid fa-trash"></span> Eliminar</button>
                `;
              }
            }
          ],
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
      complete: () => {
        this.loaderService.deactivateInternalSignal();
        const table = this.category.nativeElement as HTMLElement;

          table.querySelectorAll('[data-action]').forEach(btn => {
            btn.addEventListener('click', (event) => {
              const target = event.currentTarget as HTMLElement;
              const id = Number(target.getAttribute('data-id'));
              // const action = target.getAttribute('data-action');
              this.categoryId.set(id);
            });
          });
      },
      error: (err) => {
        console.error('Error al obtener categorías:', err);
      }
    });
  }


  deleteCategory(): void {
    this.loaderService.activateInternalSignal();
    this.categoryDeletedSuscription = this.categoryService.deleteCategory(this.categoryId()).subscribe({
      next: (res) => {
        this.fetchCategories();
        this.categoryCreated.set(false);
        this.toastr.success('Categoría eliminada exitosamente');
      },
      complete: () => {
        this.categoryDeletedSuscription?.unsubscribe();
        this.loaderService.deactivateInternalSignal();
      },
      error: (err) => {
        console.error('Error al eliminar categoría:', err);
        this.toastr.error(err.error.message);
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
