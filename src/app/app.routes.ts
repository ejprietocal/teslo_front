import { Routes } from '@angular/router';
import { protectRouteGuard } from './guards/protect-route.guard';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/components/login/login.component')
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./views/components/dashboard/dashboard.component'),
    canActivate:[protectRouteGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./views/components/main-view/main-view.component')
      },
      {
        path: 'products',
        loadComponent: () => import('./views/components/products/products.component')
      },
      {
        path: 'supplies',
        loadComponent: () => import('./views/components/supplies/supplies.component')
      },
      {
        path: 'warehouse',
        loadComponent: () => import('./views/components/warehouse/warehouse.component')
      },
      {
        path: 'account',
        loadComponent: () => import('./views/components/account/account.component')
      },
      {
        path: 'users',
        loadComponent: () => import('./views/components/users/users.component')
      }
    ],
  },
  {
    path: 'register',
    loadComponent: () => import('./views/components/register/register.component').then(m => m.RegisterComponent),
  },
  {
    path: 'retrieve-account',
    loadComponent: () => import('./views/components/retrieve-account/retrieve-account.component').then(m => m.RetrieveAccountComponent),
  },
  {
    path: 'api/auth/reset-password/:token',
    loadComponent: () => import('./views/components/reset-password/reset-password.component').then(m => m.ResetPasswordComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./views/components/not-found/not-found.component').then(m => m.NotFoundComponent)
  },
];
