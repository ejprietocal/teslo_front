import { Component, OnInit } from '@angular/core';
import { TopMenuComponent } from '../top-menu/top-menu.component';
import { TopCardComponent } from '../top-card/top-card.component';
import { ItemCardTop } from 'src/app/interfaces/item-card-top';

@Component({
  selector: 'app-content-internal',
  imports: [
    TopMenuComponent,
    TopCardComponent
  ],
  templateUrl: './content-internal.component.html',
  styleUrl: './content-internal.component.css'
})
export class ContentInternalComponent implements OnInit {

  items: ItemCardTop[] = [];

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
  }
}
