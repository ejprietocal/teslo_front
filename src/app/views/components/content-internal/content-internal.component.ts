import { Component, OnInit } from '@angular/core';
import { TopMenuComponent } from '../top-menu/top-menu.component';
import { TopCardComponent } from '../top-card/top-card.component';
import { ItemCardTop } from 'src/app/interfaces/item-card-top';
import { GraphicComponent } from '../graphic/graphic.component';
import { Graphic } from 'src/app/interfaces/graphic';

@Component({
  selector: 'app-content-internal',
  imports: [
    TopMenuComponent,
    TopCardComponent,
    GraphicComponent
  ],
  templateUrl: './content-internal.component.html',
  styleUrl: './content-internal.component.css'
})
export class ContentInternalComponent implements OnInit {

  items: ItemCardTop[] = [];
  graphic: Graphic[] = [];

  ngOnInit(): void {
    this.items = [
      {
        title: 'Ingreso hoy',
        value: 100,
        percentage: .23,
        icon: 'faMoneyBill',
        message: 'vs dia anterior'
      },
      {
        title: 'Total domicilios',
        value: 10567345,
        percentage: -.12,
        icon: 'faMotorcycle',
        message: 'vs dia anterior'
      },
      {
        title: 'Total local',
        value: 300,
        percentage: .14,
        icon: 'faStore',
        message: 'vs dia anterior'
      },
      {
        title: 'Ingreso acumulado',
        value: 400,
        percentage: .11,
        icon: 'faMoneyBillTrendUp',
        message: 'vs mes anterior'

      },
    ];

    this.graphic = [
      {
        titleGeneral: 'Ingreso hoy',
        xTitle: 'Mes',
        yTitle: 'Ingreso',
        data: [
          {
            xValue: 1,
            yValue: 100
          },
          {
            xValue: 2,
            yValue: 200
          },
          {
            xValue: 3,
            yValue: 300
          },
          {
            xValue: 4,
            yValue: 400
          },
          {
            xValue: 5,
            yValue: 500
          },
          {
            xValue: 6,
            yValue: 600
          },
          {
            xValue: 7,
            yValue: 700
          },
          {
            xValue: 8,
            yValue: 800
          },
          {
            xValue: 9,
            yValue: 900
          },
          {
            xValue: 10,
            yValue: 1000
          }
        ],
        colorScheme: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#800080', '#800000', '#008080', '#000080']
      },
      {
        titleGeneral: 'Ingreso acumulado',
        xTitle: 'Mes',
        yTitle: 'Ingreso',
        data: [
          {
            xValue: 1,
            yValue: 100
          },
          {
            xValue: 2,
            yValue: 200
          },
          {
            xValue: 3,
            yValue: 300
          },
          {
            xValue: 4,
            yValue: 400
          },
          {
            xValue: 5,
            yValue: 500
          },
          {
            xValue: 6,
            yValue: 600
          },
          {
            xValue: 7,
            yValue: 700
          },
          {
            xValue: 8,
            yValue: 800
          },
          {
            xValue: 9,
            yValue: 900
          },
          {
            xValue: 10,
            yValue: 1000
          }
        ],
        colorScheme: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#800080', '#800000', '#008080', '#000080']
      },
      {
        titleGeneral: 'Total domicilios',
        xTitle: 'Mes',
        yTitle: 'Total',
        data: [
          {
            xValue: 1,
            yValue: 100
          },
          {
            xValue: 2,
            yValue: 200
          },
          {
            xValue: 3,
            yValue: 300
          },
          {
            xValue: 4,
            yValue: 400
          },
          {
            xValue: 5,
            yValue: 500
          },
          {
            xValue: 6,
            yValue: 600
          },
          {
            xValue: 7,
            yValue: 700
          },
          {
            xValue: 8,
            yValue: 800
          },
          {
            xValue: 9,
            yValue: 900
          },
          {
            xValue: 10,
            yValue: 1000
          }
        ],
        colorScheme: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#800080', '#800000', '#008080', '#000080']
      },
    ];
  }
}
