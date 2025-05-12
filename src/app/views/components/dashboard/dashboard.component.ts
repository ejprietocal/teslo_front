import { Component, inject } from '@angular/core';
import { TopMenuComponent } from "../top-menu/top-menu.component";
import { RefreshTokenService } from '../../services/refresh-token.service';
import { RightMenuComponent } from '../right-menu/right-menu.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { BreadCumbComponent } from '../bread-cumb/bread-cumb.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    RightMenuComponent,
    TopMenuComponent,
    RouterOutlet,
    BreadCumbComponent,
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {

  private readonly router = inject(Router);
  private readonly refreshToken = inject(RefreshTokenService);
  private routerSubscription!: Subscription;

  ngOnInit(): void {
    this.refreshToken.checkToken();

    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.refreshToken.checkToken();
      });
  }
  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

}
