import { Component, EventEmitter, Output, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FiltersService } from '../../../services/filters/filters.service'
import { FormsModule, NgForm } from '@angular/forms'

@Component({
  selector: 'app-products-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products-filter.component.html',
  styleUrl: './products-filter.component.css',
})
export class ProductsFilterComponent {
  @ViewChild('myForm') myForm!: NgForm
  @Output() filterChange = new EventEmitter<void>()
  type: string = ''
  rooms: number = 0
  neighborhood: string = ''
  minPrice: number = 0
  maxPrice: number = Infinity
  order_by: string = ''
  order: string = ''

  showFilters: boolean = false

  toggleFilters(): void {
    this.showFilters = !this.showFilters
  }

  constructor(private filtersService: FiltersService) {
    // Inicializar el estado de los filtros
  }
  clearFilters(): void {
    console.log('reset')
    this.myForm.reset()
    this.filtersService.clear()
    this.filterChange.emit()
  }
  search(): void {
    // Lógica para enviar los filtros al servidor
    console.log('filter')
    this.showFilters = false
    if (this.myForm.value.type != '')
      this.filtersService.add({ name: 'type', value: this.myForm.value.type })
    if (this.myForm.value.rooms > 0)
      this.filtersService.add({ name: 'rooms', value: this.myForm.value.rooms })
    if (this.myForm.value.neighborhood != '')
      this.filtersService.add({
        name: 'neighborhood',
        value: this.myForm.value.neighborhood,
      })
    if (this.myForm.value.minPrice > 0)
      this.filtersService.add({
        name: 'minPrice',
        value: this.myForm.value.minPrice,
      })
    if (this.myForm.value.maxPrice > 0)
      this.filtersService.add({
        name: 'maxPrice',
        value: this.myForm.value.maxPrice,
      })

    if (this.myForm.value.order_by != '') {
      this.filtersService.add({
        name: 'order_by',
        value: this.myForm.value.order_by,
      })
    }

    if (this.myForm.value.order != '') {
      this.filtersService.add({ name: 'order', value: this.myForm.value.order })
    }

    this.filterChange.emit()
  }
}
