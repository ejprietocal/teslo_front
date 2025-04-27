import { Component, inject } from '@angular/core';
import { ToggleMenuService } from '../../services/toggle-menu.service';
import { RightMenuComponent } from '../right-menu/right-menu.component';
import { ContentInternalComponent } from '../content-internal/content-internal.component';

@Component({
  selector: 'app-content',
  imports: [
    RightMenuComponent,
    ContentInternalComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  private readonly toggleMenuService = inject(ToggleMenuService);



}
