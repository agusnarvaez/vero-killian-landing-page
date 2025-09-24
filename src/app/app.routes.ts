import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'vender',
    loadComponent: () =>
      import('./pages/sell/sell.component').then((m) => m.SellComponent),
  },
  {
    path: 'catalogo',
    loadComponent: () =>
      import('./pages/products/products.component').then(
        (m) => m.ProductsComponent,
      ),
  },
  {
    path: 'catalogo/:id',
    loadComponent: () =>
      import('./pages/product-detail/product-detail.component').then(
        (m) => m.ProductDetailComponent,
      ),
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent,
      ),
  },
  {
    path: 'preguntas-frecuentes',
    loadComponent: () =>
      import('./sections/home/home-faq/home-faq.component').then(
        (m) => m.HomeFaqComponent,
      ),
  },
  {
    path: 'notFound',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (m) => m.NotFoundComponent,
      ),
  },
  { path: '**', redirectTo: 'notFound' },
]
