import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Product } from '../../../models/product'
import { RouterLink } from '@angular/router'
import { LazyImageComponent } from '../../../components/lazy-image/lazy-image.component'
@Component({
  selector: 'app-products-card',
  standalone: true,
  imports: [CommonModule, RouterLink, LazyImageComponent],
  templateUrl: './products-card.component.html',
  styleUrl: './products-card.component.css',
})
export class ProductsCardComponent {
  @Input() product?: Product

  iconButton = '../../../../assets/icons/arrow-up-right.svg'
}
