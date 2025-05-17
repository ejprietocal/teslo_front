import { Component } from '@angular/core';
import { CreateItemsComponent } from './create-items/create-items.component';
import { ListItemsComponent } from './list-items/list-items.component';

@Component({
  selector: 'app-items',
  imports: [CreateItemsComponent,ListItemsComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export default class ItemsComponent {



}
