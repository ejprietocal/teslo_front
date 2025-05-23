import { AfterViewInit, Component, ElementRef, inject,ViewChild, effect, signal } from '@angular/core';
import { ActivateLoaderService } from 'src/app/services/activate-loader.service';
import { CreateVariantsComponent } from './create-variants/create-variants.component';
import { CreateVariantsService } from '../../services/create-variants.service';
import { CommonModule } from '@angular/common';
import { DataTable } from 'simple-datatables';
import { Variante } from 'src/app/interfaces/variante';
import { dataCategory } from 'src/app/interfaces/data-datatable';
import { Subscription } from 'rxjs';
import { EliminarVarianteComponent } from './eliminar-variante/eliminar-variante.component';
import { Popover } from 'flowbite';
import { PopoverComponent } from '../popover/popover.component';


@Component({
  selector: 'app-variants',
  imports: [
    CreateVariantsComponent, CommonModule, EliminarVarianteComponent,
    PopoverComponent
],
  templateUrl: './variants.component.html',
  styleUrl: './variants.component.css'
})
export default class VariantsComponent implements AfterViewInit{
  @ViewChild(PopoverComponent) popover!: PopoverComponent;
  @ViewChild('variantWrapper') variant!: ElementRef;
  variantsCreated = signal(false);
  private variantSuscription?: Subscription;
  public readonly loaderService = inject(ActivateLoaderService);
  public readonly variantService = inject(CreateVariantsService);

  public dataTableInstance?: DataTable;
  public variantSend : Variante[] = [];
  public mode = signal<string>('');
  public resetForm = signal(false);
  public actionDeleteVariante = signal(false);
  public variantsId = signal<number>(0);
  variantes : (string | boolean | number )[][] = [];




  constructor(){
    effect(() => {
      if (this.variantsCreated()) {
        this.fetchVariants();
        this.variantsCreated.set(false);
      }
      if (this.actionDeleteVariante()) {
        this.deleteVariante();
        this.actionDeleteVariante.set(false);
      }
    });


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

  fetchVariants(): void {
    this.loaderService.activateInternalSignal();
    this.variantSuscription = this.variantService.getVariants().subscribe({
      next: (res) => {
        this.variantes = res.map(c => [
          c.name,
          c.description,
          c.isActive,
          c.id,
        ]);
        this.variantSend = res;
        this.datos.data = this.variantes;

        if (this.dataTableInstance) {
          this.dataTableInstance.destroy();
        }

        this.dataTableInstance = new DataTable(this.variant.nativeElement,{
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
                    <button type="button" data-id="${value}" data-action="edit" data-popover-text="Actualizar Variante" class="button-edit" data-modal-target="createVariante" data-modal-toggle="createVariante">
                      <span class="fa-solid fa-pen-to-square"></span>
                    </button>
                    <button type="button" data-id="${value}" data-popover-text="Eliminar Variante"  data-action="delete" class="button-cancel" data-modal-target="delete-modal" data-modal-toggle="delete-modal">
                      <span class="fa-solid fa-trash"></span>
                    </button>
                    <button type="button" data-id="${value}" data-popover-text="Crear nuevo valor para esta variante" class="button-create" aria-label="Crear valor">
                      <span class="fa-solid fa-plus"></span>
                    </button>



                  </div>
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
        this.variantSuscription?.unsubscribe();
        const table = this.variant.nativeElement as HTMLElement;


          table.querySelectorAll('[data-action]').forEach(btn => {
            btn.addEventListener('click', (event) => {
              const target = event.currentTarget as HTMLElement;
              // const id = parseInt(target.getAttribute('data-id')!);
              const dataAction = target.getAttribute('data-action');
              this.mode.set(dataAction === 'edit' ? 'modify' : 'create');
              this.variantsId.set(+target.getAttribute('data-id')!);

              if (dataAction === 'create') {
                this.resetForm.set(true);
              }
            });
          });

          table.addEventListener('mouseover', (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const btn = target.closest('[data-popover-text]') as HTMLElement | null;

            if (btn) {
              const text = btn.getAttribute('data-popover-text') || '';
              this.popover.showAtElement(btn, text);
            }
          });

          table.addEventListener('mouseout', (event) => {
            const related = event.relatedTarget as HTMLElement | null;
            const target = event.target as HTMLElement;
            if (
              target.closest('[data-popover-text]') &&
              (!related || (!related.closest('[data-popover-text]') && !related.closest('app-popover')))
            ) {
              this.popover.hide();
            }
          });


      },
      error: (err) => {
        this.loaderService.deactivateInternalSignal();
        console.error('Error al obtener las variantes:', err);
      }
    });
  }

   deleteVariante(): void {
    // console.log('deleteCategory');
    // this.loaderService.activateInternalSignal();
    // this.categoryDeletedSuscription = this.categoryService.deleteCategory(this.categoryId()).subscribe({
    //   next: (res) => {
    //     this.fetchCategories();
    //     this.categoryCreated.set(false);
    //     this.toastr.success('Categoría eliminada exitosamente');
    //   },
    //   complete: () => {
    //     this.categoryDeletedSuscription?.unsubscribe();
    //     this.loaderService.deactivateInternalSignal();
    //   },
    //   error: (err) => {
    //     console.error('Error al eliminar categoría:', err);
    //     this.toastr.error(err.error.message);
    //   }
    // });
  }

  ngOnInit(): void {
    this.loaderService.deactivateInternalSignal();
  }

  ngAfterViewInit(): void {
    this.fetchVariants();

  }

  showPopover(button: HTMLElement) {
  const text = button.getAttribute('data-popover-text') ?? 'Texto por defecto';
  this.popover.showAtElement(button, text);
  }

  hidePopover() {
    this.popover.hide();
  }
}



