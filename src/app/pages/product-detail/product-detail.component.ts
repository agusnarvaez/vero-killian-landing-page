import { ButtonComponent } from './../../components/button/button.component'
import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CarrouselComponent } from '../../sections/product-detail/carrousel/carrousel.component'
import { MainInfoComponent } from '../../sections/product-detail/main-info/main-info.component'
import { ProductService } from '../../services/product/product.service'
import { Product } from '../../models/product'
import { ActivatedRoute } from '@angular/router'
import { ContactFormComponent } from '../../sections/contact/contact-form/contact-form.component'
import { Meta, Title } from '@angular/platform-browser'
import { LoaderService } from '../../loader.service'

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    CarrouselComponent,
    MainInfoComponent,
    ContactFormComponent,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  product: Product | undefined
  showNotification = false
  showLoading = true
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private metaTagService: Meta,
    private titleService: Title,
    private loaderService: LoaderService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.loaderService.showLoading()
      this.productService.getById(params['id']).subscribe((product) => {
        this.product = product
        if (this.product) {
          this.loaderService.hideLoading()
        }
        //this.loaderService.hideLoading()
        this.titleService.setTitle(
          `${this.product?.operation_type} ${this.product?.type} en ${this.product?.address.city} - Verónica Killian Inmobiliaria`,
        )
        this.metaTagService.updateTag({
          name: 'description',
          content: `${this.product?.title}, ${this.product?.rooms} ambientes, ${this.product?.area} m2 totales, ${this.product?.coveredArea} m2 cubiertos, ${this.product?.bathrooms} baños, ${this.product?.garage} cocheras`,
        })
        this.metaTagService.updateTag({
          name: 'keywords',
          content:
            ' Propiedad, inmueble, bien raíz, bienes raíces, inmobiliaria, Verónica Killian' +
            (this.product?.address ? `, ${this.product?.address.city}` : ''),
        })

        this.metaTagService.updateTag({
          property: 'og:title',
          content: `${this.product?.operation_type} ${this.product?.type} en ${this.product?.address.city} - Verónica Killian Inmobiliaria`,
        })
        this.metaTagService.updateTag({
          property: 'og:description',
          content: this.product?.description ?? '',
        })
        this.metaTagService.updateTag({
          property: 'og:url',
          content: `https://www.veritokillian.ar/catalogo/${this.product?.id}`,
        })

        this.metaTagService.updateTag({
          name: 'twitter:title',
          content: `${this.product?.operation_type} ${this.product?.type} en ${this.product?.address.city} - Verónica Killian Inmobiliaria`,
        })
        this.metaTagService.updateTag({
          name: 'twitter:description',
          content: this.product?.description ?? '',
        })
        this.metaTagService.updateTag({
          name: 'twitter:url',
          content: `https://www.veritokillian.ar/catalogo/${this.product?.id}`,
        })
      })
    })
    const top = document.getElementById('product-detail-top')
    top?.scrollIntoView({
      behavior: 'auto',
      block: 'start',
    })
  }

  copyActualRoute() {
    const url = 'www.veritokillian.ar/catalogo/' + this.product?.id
    navigator.clipboard.writeText(url)
    this.showNotification = true

    setTimeout(() => {
      this.showNotification = false
    }, 2000)
  }
}
