import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoneyBill, faMotorcycle, faMoneyBillTrendUp, faStore, IconDefinition  } from '@fortawesome/free-solid-svg-icons';
import { ItemCardTop } from 'src/app/interfaces/item-card-top';

@Component({
  selector: 'app-top-card',
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  templateUrl: './top-card.component.html',
  styleUrl: './top-card.component.css'
})
export class TopCardComponent {

  items = input.required<ItemCardTop[]>();

  icons :{ [key: string]: IconDefinition } = {
    'faMoneyBill' : faMoneyBill,
    'faMotorcycle' : faMotorcycle,
    'faMoneyBillTrendUp' : faMoneyBillTrendUp,
    'faStore' : faStore
  }

}
