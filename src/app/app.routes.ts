import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { ProductsComponent } from './pages/products/products.component'
import { ProductDetailComponent } from './pages/product-detail/product-detail.component'
import { ContactComponent } from './pages/contact/contact.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { SellComponent } from './pages/sell/sell.component'
import { HomeFaqComponent } from './sections/home/home-faq/home-faq.component'
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'vender',
    component: SellComponent,
  },
  {
    path: 'catalogo',
    component: ProductsComponent,
  },
  {
    path: 'catalogo/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'contacto',
    component: ContactComponent,
  },
  {
    path: 'preguntas-frecuentes',
    component: HomeFaqComponent,
  },
  { path: 'notFound', component: NotFoundComponent },
  { path: '**', redirectTo: 'notFound' },
]
