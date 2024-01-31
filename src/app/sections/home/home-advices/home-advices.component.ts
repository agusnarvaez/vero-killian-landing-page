import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-home-advices',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home-advices.component.html',
  styleUrl: './home-advices.component.css'
})
export class HomeAdvicesComponent {

  public cardsFlipped = [false, false] // Inicializa todos los estados en false

  flipCard(index: number) {
    this.cardsFlipped[index] = !this.cardsFlipped[index] // Voltea el estado de la tarjeta clickeada
    console.log('flipCard', index,this.cardsFlipped)
  }
  isFlipped(index: number) {
    return this.cardsFlipped[index] // Retorna el estado de la tarjeta
  }
}
