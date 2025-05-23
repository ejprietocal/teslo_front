import { Component, inject, OnInit } from '@angular/core';
import { CreateItemsComponent } from './create-items/create-items.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ActivateLoaderService } from 'src/app/services/activate-loader.service';

@Component({
  selector: 'app-items',
  imports: [CreateItemsComponent,ListItemsComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export default class ItemsComponent implements OnInit{
  ngOnInit(): void {
    this.loaderService.deactivateInternalSignal()
  }

 loaderService = inject(ActivateLoaderService)

}
