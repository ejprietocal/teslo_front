import { Component, inject } from '@angular/core';
import { TopMenuComponent } from "../top-menu/top-menu.component";
import { RefreshTokenService } from '../../services/refresh-token.service';
import { RightMenuComponent } from '../right-menu/right-menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    RightMenuComponent,
    TopMenuComponent,
    RouterOutlet,
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {
  private readonly refreshToken = inject(RefreshTokenService);

  ngOnInit(): void {
    this.refreshToken.checkToken();
  }

}
