import { Component, OnInit } from '@angular/core';
import { ItemCardTop } from 'src/app/interfaces/item-card-top';
import { Graphic } from 'src/app/interfaces/graphic';
import { TopCardComponent } from '../top-card/top-card.component';
import { GraphicComponent } from '../graphic/graphic.component';

@Component({
  selector: 'app-main-view',
  imports: [
    TopCardComponent,
    GraphicComponent
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export default class MainViewComponent implements OnInit {
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
        labels:['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'],
        labelDataSet: 'Ingreso Semana Actual',
        data: [
          {
            data: 100
          },
          {
            data: 200
          },
          {
            data: 120
          },
          {
            data: 100
          },
          {
            data: 500
          }
        ],
        borderColor: '#FFFFFF',
        fill: true,
        type: 'line',
        id: 'chartContainer',
        color: "#FFFFFF"

      },
      {
        labels:['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'],
        labelDataSet: 'Ingreso Semana Actual',
        data: [
          {
            data: 100
          },
          {
            data: 200
          },
          {
            data: 120
          },
          {
            data: 100
          },
          {
            data: 500
          }
        ],
        borderColor: '#FFFFFF',
        fill: true,
        type: 'bar',
        id: 'chartContainer',
        color: "#FFFFFF"

      },
    ];
  }
}
