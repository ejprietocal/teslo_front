import { Routes } from '@angular/router';
import { protectRouteGuard } from './guards/protect-route.guard';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./views/components/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate:[protectRouteGuard],
  },
  {
    path: 'register',
    loadComponent: () => import('./views/components/register/register.component').then(m => m.RegisterComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./views/components/not-found/not-found.component').then(m => m.NotFoundComponent)
  },
];
