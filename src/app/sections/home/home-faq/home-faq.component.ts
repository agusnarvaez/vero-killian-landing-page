import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FaqItemComponent } from '../../../components/faq-item/faq-item.component'

@Component({
  selector: 'app-home-faq',
  standalone: true,
  imports: [CommonModule,FaqItemComponent],
  templateUrl: './home-faq.component.html',
  styleUrl: './home-faq.component.css'
})
export class HomeFaqComponent {
  constructor() {}
  faqList = [
    {
      question: 'Quiero comprar una propiedad',
      answer:
        'Contactame y coordinamos una reunión presencial o virtual para poder guiarte en el proceso. Necesitas tener claro cuánto dinero podrías invertir, cuál es el objetivo de la búsqueda de compra. El asesor va a guiarte en la búsqueda, canalizando las consultas por vos, para realizar visitas acertadas sin perder tiempo, optimizando la búsqueda acorde a tus necesidades y objetivo.'
    },
    {
      question: '¿Que necesito para tasar mi propiedad?',
      answer:
        '-Necesitas tener tu título de propiedad. No tengo el título, escribime y te asesoro. Del título el matriculado va a obtener la cantidad de m2 exactos para realizar una buena tasación y asesorarte en la lectura del mismo para confirmar cuantos titulares son y si se necesita otra documentación respaldatoria para poder vender. <br>-El matriculado necesita acercarse a la propiedad y conocerla.'
    },
    {
      question: '¿Que necesito para publicar una propiedad?',
      answer:
        "-Título de propiedad, declaratoria de herederos, poder, DNI de los titulares o apoderados. No tengo el título, ¿no se cuál es?, ¿porque necesito la declaratoria?, <a href='vender'>escribime</a> y te asesoro.<br>-Si querés vender un departamento o PH vamos a necesitar el REGLAMENTO DE COPROPIEDAD<br>-Si tenés PLANOS mejor<br>-Detalle de los SERVICIOS, IMPUESTOS y EXPENSAS actualizados."
    },
    {
      question: '¿Tengo que preparar mi propiedad para el relevamiento fotográfico?',
      answer:
        'Sí, es super importante trabajar juntos a la hora de mostrar tu propiedad. Hacerlo con profesionales calificados es el punto más importante en la inversión que voy a realizar en tú propiedad.<br>Tanto en propiedades vacías o habitadas hay que limpiar todos los ambientes para el día del relevamiento fotográfico y video.<br>Minimizar al máximo la cantidad de muebles y ornamentos. Despersonalizar muros y muebles retirando retratos personales e imágenes religiosas.'
    },
    {
      question: '¿Tengo que preparar mi propiedad para las visitas?',
      answer:
        'Sí. Limpieza y ventilación de ambientes.<br>Cuidar el orden en todos los ambientes incluso en los placares.<br>Si tenés espacio exterior debe estar limpio y accesible.'
    },
    {
      question: '¿Por qué elegir un agente matriculado a la hora de comprar una propiedad?',
      answer:
        'Estar asesorado 100% desde el inicio de tu idea de compra tiene mucho TIEMPO de inversión. Ese tiempo bien utilizado se deduce en tranquilidad legal, inversión de dinero, optimización de tiempo real y obtención del objetivo.'
    },
    {
      question: '¿Que gastos tengo que tener en cuenta para comprar o vender una propiedad?',
      answer:
        'IMPUESTO DE SELLOS 1,75% por partes iguales, en pesos sobre el valor de escrituración, esto lo retiene el Escribano. + IVA<br>ITI (al vendedor si corresponde) 1,5% en pesos sobre el valor de escrituración, esto lo retiene el Escribano. + IVA<br>Honorarios del Escribanía solo le corresponden al comprador el 1% o 2 %<br>Honorarios Inmobiliarios parte Vendedora 3% + IVA<br>Honorarios Inmobiliarios parte Vendedora 4% + IVA'
    }
  ]

}
