import { Component } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    SideBarComponent,
    ContentComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
