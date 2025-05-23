import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-bread-cumb',
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './bread-cumb.component.html',
  styleUrl: './bread-cumb.component.css'
})
export class BreadCumbComponent {
  breadcrumb: { label: string, url: string }[] = [];


  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  routerSuscription: Subscription | null = null;

  constructor(
  ) {
    this.routerSuscription = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        this.breadcrumb = [];
        this.createBreadcrumb(this.activatedRoute.root);
      });
  }

  ngOnDestroy(): void {
    if (this.routerSuscription) {
      this.routerSuscription.unsubscribe();
    }
  }

 createBreadcrumb(route: ActivatedRoute, url: string = '') {
  const children: ActivatedRoute[] = route.children;

  if (children.length === 0) return;

  for (const child of children) {
    const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
    if (routeURL !== '') {
      const nextUrl = `${url}/${routeURL}`;
      this.breadcrumb.push({
        label: routeURL,
        url: nextUrl
      });
      this.createBreadcrumb(child, nextUrl);
    }
  }
}

}
