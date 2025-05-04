import { AfterViewInit, Component, effect, ElementRef, inject, Injector, Input, OnInit, QueryList, runInInjectionContext, ViewChild, ViewChildren } from '@angular/core';
import { Graphic } from 'src/app/interfaces/graphic';
import { Chart , Colors} from 'chart.js/auto';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-graphic',
  imports: [],
  templateUrl: './graphic.component.html',
  styleUrl: './graphic.component.css'
})
export class GraphicComponent implements  AfterViewInit {

  @Input() items: Graphic[] = [];
  @ViewChildren('chartContainerView') chartContainer!: QueryList<ElementRef>;
  public readonly darkModeService = inject(DarkModeService);
  private injector: Injector = inject(Injector);
  public chart : Chart | undefined;

  ngAfterViewInit(): void {
    this.chartContainer.forEach((container, index) => {
      const chartData = this.items[index]; // Toma el conjunto de datos correspondiente al índice
      if (chartData) {
        const data = {
          labels: chartData.labels,
          datasets: [
            {
              label: chartData.labelDataSet,
              data: chartData.data.map(d => d.data), // Extrae los valores de 'data'
              fill: chartData.fill,
              borderWidth: 2,
            },
          ],
        };
        // Crea el gráfico para cada contenedor
        new Chart(container.nativeElement, {

          type: chartData.type, // Usamos el tipo especificado
          data: data,
          options: {
            responsive: false,
            maintainAspectRatio: true,
            plugins: {
              colors: {
                forceOverride: true
              }
            },

          }
        });
        Chart.register(Colors);
      }
    });

    runInInjectionContext(this.injector, () => {
      effect(() => {
        const isDarkMode = this.darkModeService.darkMode(); // Obtener el valor actual del Signal
        // Aquí puedes manejar el cambio del modo oscuro
        this.updateChartColors(isDarkMode);
        // Actualiza los colores de los gráficos o cualquier otro componente aquí
      });
    });
  }

  updateChartColors(isDarkMode: boolean) {
    const color = isDarkMode ? '#FFFFFF' : '#000000'; // Ajusta los colores según el modo oscuro
    const colorGrid = isDarkMode ? '#808080' : '#808080'; // Ajusta los colores de la cuadrícula según el modo oscuro
    this.chartContainer.forEach((container: ElementRef) => {
      const chart = Chart.getChart(container.nativeElement);
      if (chart) {
        if (chart.options?.plugins?.legend?.labels) {
          chart.options.plugins.legend.labels.color = color;
        }
        if (chart.options?.scales?.['y']?.ticks) {
          chart.options.scales['y'].ticks.color = color;
        }
        if (chart.options?.scales?.['x']?.ticks) {
          chart.options.scales['x'].ticks.color = color;
        }
        if (chart.options?.scales?.['x']?.grid) {
          chart.options.scales['x'].grid.color = colorGrid; // Cambiar el color de la cuadrícula del eje X
        }
        if (chart.options?.scales?.['y']?.grid) {
          chart.options.scales['y'].grid.color = colorGrid; // Cambiar el color de la cuadrícula del eje Y
        }
        chart.update();
      }
    });
  }

}
