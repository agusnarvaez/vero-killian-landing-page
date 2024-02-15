import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-home-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-reviews.component.html',
  styleUrl: './home-reviews.component.css',
})
export class HomeReviewsComponent {
  actualIndex = 0
  reviews = [
    {
      author: 'A.S.',
      avatar: 'assets/reviews/myriam-gonzalez.png',
      content:
        'Estoy muy agradecida y feliz con la atención de Verónica Killian, desde el principio fue muy amable con nosotros y nos brindó claridad y seguridad durante todo el proceso. Espero que todos los que buscan un nuevo hogar puedan tener una experiencia tan positiva como la que tuvimos con Verónica🏠❤️',
    },
    {
      author: 'R.G.',
      avatar: 'assets/reviews/myriam-gonzalez.png',
      content:
        'Nuestra experiencia fue excelente de comienzo a fin. Compromiso, seriedad y honestidad. Quisiera destacar la calidez y buena predisposición de Vero. Siempre respetuosa con nosotros y acompañándonos en el proceso de venta. Gracias por ayudarnos a concretar nuestro proyecto!!!',
    },
    {
      author: 'M.B.',
      avatar: 'assets/reviews/myriam-gonzalez.png',
      content:
        'Excelentes en todo. Verónica Killian nos ayudó en todo el proceso de forma super personalizada, el cual tuvimos que manejar desde el extranjero, y no tuvimos ningún problema y los resultados son excelentes.',
    },
    {
      author: 'M.V.',
      avatar: 'assets/reviews/myriam-gonzalez.png',
      content:
        'El excelente trabajo de Verito nos permitió no sólo concretar la venta de nuestro departamento en forma rápida sino también a un precio muy conveniente. Además queremos destacar que todo se realizó con un trato y una calidez inigualables. Trabaja con un profesionalismo digno de recomendar. Gracias por habernos acompañado en este momento tan importante para nuestra familia.',
    },
    {
      author: 'M.B.',
      avatar: 'assets/reviews/myriam-gonzalez.png',
      content:
        'Nos asesoró Verónica Killian y la verdad que todo 10 puntos. No se concretó la operación pero fue por un tema propio, ella nos brindó todas las posibilidades.Totalmente recomendable.',
    },
    {
      author: 'M.C. M.',
      avatar: 'assets/reviews/myriam-gonzalez.png',
      content:
        'Solo tengo palabras de agradecimiento para la inmobiliaria Propicia. Tanto Verónica como Fernando se destacaron por su cálida atención, por la ayuda permanente y el total cumplimiento de todo lo acordado: lo cual resultó en una feliz y emotiva escritura. ¡Muy agradecida por la inmejorable experiencia!',
    },
    {
      author: 'M.W.M.',
      avatar: 'assets/reviews/myriam-gonzalez.png',
      content:
        '¡Excelente todo! Un lujo y un placer haber comprado mi casa con Vero impecable, su paciencia, calidez, trato … realmente hizo que todo el proceso fuera fantástico. ¡GRACIAS INFINITAS! Realmente nunca había tenido una experiencia tan buena con las inmobiliarias! ¡Son únicos!',
    },
    {
      author: 'M.A.C.',
      avatar: 'assets/reviews/myriam-gonzalez.png',
      content:
        'Nuestra experiencia fue sumamente buena; entrecruzamiento perfecto entre calidez humana y profesionalismo en cada uno de los pasos del proceso.Agradecimiento especial para Verónica que acompañó genialmente todo! Recomiendo fuertemente esta inmobiliaria.',
    },
    {
      author: 'L.A.B.A.',
      avatar: 'assets/reviews/myriam-gonzalez.png',
      content:
        '¡Recomendadísimo! No solo por su idoneidad profesional y como presentaron el análisis para la tasación, primordialmente por su calidad humana, empatía, responsabilidad y respeto, acompañando en cada etapa del proceso de compra-venta. ¡Gracias Verónica!',
    },
    {
      author: 'F.T.',
      avatar: 'assets/reviews/myriam-gonzalez.png',
      content:
        'Recomiendo! muy contenta con Veronica excelente profesional y muy amable, gracias al servicio y disposición de ella logramos alquilar enseguida. Muy agradecida',
    },
    {
      author: 'F.A.',
      avatar: 'assets/reviews/myriam-gonzalez.png',
      content:
        'Recomiendo mucho a vero killian. Al mudarme a CABA hizo que el proceso no sea tan pesado y se nota su buena disposición para ayudarte. Excelente trabajo!!!',
    },
    {
      author: 'S.Y.',
      avatar: 'assets/reviews/myriam-gonzalez.png',
      content:
        'Recomiendo mucho a vero killian. Al mudarme a CABA hizo que el proceso no sea tan pesado y se nota su buena disposición para ayudarte. Excelente trabajo!!!',
    },
    {
      author: 'U.K.',
      avatar: 'assets/reviews/myriam-gonzalez.png',
      content:
        'Excelente. Muy seria, muy buen trato y profesional. Gracias Verónica, todo de diez.',
    },
    {
      author: 'T.D.',
      avatar: 'assets/reviews/myriam-gonzalez.png',
      content:
        'Hace unos dos o tres días recibí asesoramiento de Veronica Killian, por una posible tasación. Muy buena atención y muy clara y específica en sus indicaciones. Ojalá se pueda hacer algún negocio. Muchas gracias!',
    },
    {
      author: 'A.G.',
      avatar: 'assets/reviews/myriam-gonzalez.png',
      content:
        '¡¡Muy buen asesoramiento!! Y muy buena atención de Verónica  Killian, todo muy  sencillo  y práctico como se habló.  Gracias!!!!',
    },
  ]

  makeArray = (num: number) => new Array(Math.round(num))

  nextCard() {
    this.isLastPosition() ? (this.actualIndex = 0) : this.actualIndex++
  }
  previousCard() {
    this.isFirstPosition()
      ? (this.actualIndex = this.reviews.length - 1)
      : this.actualIndex--
  }

  isFirstPosition = () => this.actualIndex === 0

  isLastPosition = () => this.actualIndex === this.reviews.length - 1

  carouselPosition() {
    if (window.innerWidth >= 950) {
      return `translateX(-${
        100 * (this.actualIndex / (this.reviews.length * 1.08))
      }%)`
    }
    if (window.innerWidth >= 530) {
      return `translateX(-${
        100 * (this.actualIndex / (this.reviews.length * 1.07))
      }%)`
    }

    const percentage = 100 * (this.actualIndex / this.reviews.length)
    return `translateX(-${percentage}%)`
  }
}
