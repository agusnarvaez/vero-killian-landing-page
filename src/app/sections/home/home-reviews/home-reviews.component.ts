import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-home-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-reviews.component.html',
  styleUrl: './home-reviews.component.css'
})
export class HomeReviewsComponent {
  actualIndex = 0
  reviews = [
    {
      author: "Myriam Gonzalez",
      avatar: "assets/reviews/myriam-gonzalez.png",
      content: "Vero tiene una excelentísima gestión, expeditiva, ordenada, super atenta y siempre bien dispuesta. Muchísimas gracias por ayudar a que todo sea más fácil!!"
    },
    {
      author: "N.H.",
      avatar: "assets/reviews/myriam-gonzalez.png",
      content: "Trabajar con Vero ha sido un placer, altamente recomendable."
    },
    {
      author: "Y.C.",
      avatar: "assets/reviews/myriam-gonzalez.png",
      content: "Sin dudas excelentes profesionales! Venden cuando nadie vende en el mercado! Vero, mi especial agradecimiento por la atención constante, y el gran esfuerzo que hiciste, sos la 1!!!"
    },
    {
      author: "C.T.",
      avatar: "assets/reviews/myriam-gonzalez.png",
      content: "Excelentes profesionales! Muy atentos a todos los detalles!"
    },
    {
      author: "Myriam Gonzalez",
      avatar: "assets/reviews/myriam-gonzalez.png",
      content: "Vero tiene una excelentísima gestión, expeditiva, ordenada, super atenta y siempre bien dispuesta. Muchísimas gracias por ayudar a que todo sea más fácil!!"
    },
    {
      author: "N.H.",
      avatar: "assets/reviews/myriam-gonzalez.png",
      content: "Trabajar con Vero ha sido un placer, altamente recomendable."
    },
    {
      author: "Y.C.",
      avatar: "assets/reviews/myriam-gonzalez.png",
      content: "Sin dudas excelentes profesionales! Venden cuando nadie vende en el mercado! Vero, mi especial agradecimiento por la atención constante, y el gran esfuerzo que hiciste, sos la 1!!!"
    },
    {
      author: "C.T.",
      avatar: "assets/reviews/myriam-gonzalez.png",
      content: "Excelentes profesionales! Muy atentos a todos los detalles!"
    }
  ]

  makeArray = (num:number) => new Array(Math.round(num))

  nextCard(){
    this.isLastPosition()? this.actualIndex = 0 : this.actualIndex++
  }
  previousCard(){
    this.isFirstPosition()? this.actualIndex = this.reviews.length-1 : this.actualIndex--
  }

  isFirstPosition = () => this.actualIndex === 0

  isLastPosition = () => this.actualIndex === this.reviews.length-1

  carouselPosition(){
    if(window.innerWidth >= 530){
      return `translateX(-${100*(this.actualIndex/(this.reviews.length*1.3))}%)`
    }

    const percentage = 100*(this.actualIndex/this.reviews.length)
    return `translateX(-${percentage}%)`
  }
}
