import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-lazy-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css',
})
export class LazyImageComponent {
  @Input() src: string = ''
  @Input() alt: string = ''

  isLoading = true
  hasError = false

  onImageLoad() {
    this.isLoading = false
  }

  onImageError() {
    this.isLoading = false
    this.hasError = true
  }
}
