import { Component, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonComponent } from '../../components/button/button.component'
import { Meta,Title  } from '@angular/platform-browser'
import { EmailService } from '../../services/email/email.service'
import { FormsModule, NgForm } from '@angular/forms'
import { Mail } from '../../models/mail'

@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [CommonModule,ButtonComponent,FormsModule],
  templateUrl: './sell.component.html',
  styleUrl: './sell.component.css'
})
export class SellComponent {
  @ViewChild('myForm') myForm!: NgForm
  fullName: string = ''
  email: string = ''
  phone: string = ''
  neighborhood: string = ''
  address: string = ''
  type: string = ''
  isRecycled: boolean = false
  coveredArea: number = 0
  uncoveredArea: number = 0
  message: string = `<h3 style="padding: 0 5%; font-size: 12px; color: #9D9480">Datos de contacto</h3>
  <p style="padding: 0 5%; font-size: 12px; color: #9D9480">${this.email}</p>
  <p style="padding: 0 5%; font-size: 12px; color: #9D9480">${this.phone}</p>
  <h3 style="padding: 0 5%; font-size: 12px; color: #9D9480">Datos de la propiedad</h3>
  <p style="padding: 0 5%; font-size: 12px; color: #9D9480">Barrio: ${this.neighborhood}</p>
  <p style="padding: 0 5%; font-size: 12px; color: #9D9480">Dirección: ${this.address}</p>
  <p style="padding: 0 5%; font-size: 12px; color: #9D9480">Tipo: ${this.type}</p>
  <p style="padding: 0 5%; font-size: 12px; color: #9D9480">Reciclada: ${this.isRecycled ? 'Si' : 'No'}</p>
  <p style="padding: 0 5%; font-size: 12px; color: #9D9480">Metros cubiertos: ${this.coveredArea}</p>
  <p style="padding: 0 5%; font-size: 12px; color: #9D9480">Metros descubiertos: ${this.uncoveredArea}</p>`

  constructor(private metaTagService: Meta,private titleService: Title,public emailService: EmailService) { }

  ngOnInit() {
    this.titleService.setTitle('Vendé tu propiedad - Verónica Killian Inmobiliaria')
    this.metaTagService.updateTag({ name: 'description', content: '¿Querés vender tu propiedad? Verónica Killian te ofrece asesoramiento experto y personalizado para que puedas vender tu propiedad al mejor precio.' })
    this.metaTagService.updateTag({ name: 'keywords', content: ' Venta de propiedades, vender mi casa, vender mi departamento, vender mi terreno, vender mi local comercial, vender mi propiedad, asesoramiento inmobiliario, asesoramiento para vender mi propiedad' })

    this.metaTagService.updateTag({ property: 'og:title', content: 'Vendé tu propiedad - Verónica Killian Inmobiliaria' })
    this.metaTagService.updateTag({ property: 'og:description', content: '¿Querés vender tu propiedad? Verónica Killian te ofrece asesoramiento experto y personalizado para que puedas vender tu propiedad al mejor precio.' })
    this.metaTagService.updateTag({ property: 'og:url', content: 'https://www.veritokillian.ar/vender' })

    this.metaTagService.updateTag({ name: 'twitter:title', content: 'Vendé tu propiedad - Verónica Killian Inmobiliaria' })
    this.metaTagService.updateTag({ name: 'twitter:description', content: '¿Querés vender tu propiedad? Verónica Killian te ofrece asesoramiento experto y personalizado para que puedas vender tu propiedad al mejor precio.' })
    this.metaTagService.updateTag({ name: 'twitter:url', content: 'https://www.veritokillian.ar/vender' })
  }
  scrollToNext() {
    const element = document.getElementById('sellForm')
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth', block: 'start',
      })
    }
  }

  sendMail =async (mailToSend: Mail) => {

    this.emailService.sendEmail(mailToSend).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (error) => {
        console.log(error)
      }
    })

  }

  async onSubmit() {
    const notification = new Mail(
      'inmobiliaria@veritokillian.ar',
      /* 'agus.narvaez@outlook.com', */
      'no_reply@veritokillian.ar',
      `Nuevo mensaje de ${this.fullName} - Vender` ,
      this.message,
      `
      <body style="width:100%; height: 100%; background-color: #FFFFF0; font-size: 10px; padding: 5% 0;">
        <h1 style="padding: 0 5%; font-size: 15px; color: #9D9480">Hola Verónica! - Tienes un nuevo mensaje de ${this.fullName}</h1>
        <h2 style="padding: 0 5%;  font-size: 12px; color: #9D9480">Venta</h2>
        <h3 style="padding: 0 5%; font-size: 12px; color: #9D9480">Datos de contacto</h3>
        <p style="padding: 0 5%; font-size: 12px; color: #9D9480">${this.email}</p>
        <p style="padding: 0 5%; font-size: 12px; color: #9D9480">${this.phone}</p>
        <h3 style="padding: 0 5%; font-size: 12px; color: #9D9480">Datos de la propiedad</h3>
        <p style="padding: 0 5%; font-size: 12px; color: #9D9480">Barrio: ${this.neighborhood}</p>
        <p style="padding: 0 5%; font-size: 12px; color: #9D9480">Dirección: ${this.address}</p>
        <p style="padding: 0 5%; font-size: 12px; color: #9D9480">Tipo: ${this.type}</p>
        <p style="padding: 0 5%; font-size: 12px; color: #9D9480">Reciclada: ${this.isRecycled ? 'Si' : 'No'}</p>
        <p style="padding: 0 5%; font-size: 12px; color: #9D9480">Metros cubiertos: ${this.coveredArea}</p>
        <p style="padding: 0 5%; font-size: 12px; color: #9D9480">Metros descubiertos: ${this.uncoveredArea}</p>
        <div style="background-color: #FFFFF0; text-align: center; padding: 10px;">
          <img src="https://veritokillian.ar/assets/logos/logo-header.png" alt="Logo Verónica Killian" style="width: 100px; height: auto;" />
        </div>
      </body>
      `
    )
    notification.cc = 'agus.narvaez@outlook.com'

    const mailToSend = new Mail(
      this.email,
      'no_reply@veritokillian.ar',
      `Solicitud de información - Venta de propiedad` ,
      'Gracias por contactarte con nosotros, en breve nos pondremos en contacto con vos.',
      `
      <body style="width:100%; height: 100%; background-color: #FFFFF0; font-size: 10px; padding: 5% 0;">
        <h1 style="padding: 0 5%; font-size: 15px; color: #9D9480" >Hola ${this.fullName}! - Gracias por contactarte con nosotros</h1>
        <h2 style="padding: 0 5%; font-size: 12px; color: #9D9480" >Tu consulta para vender tu inmueble ya fue enviada</h2>
        <p style="padding: 0 5%; font-size: 12px; color: #9D9480" >Te estaremos contestando a la brevedad</p>
        <div style="background-color: #FFFFFF0; text-align: center; padding: 10px;">
          <img src="https://veritokillian.ar/assets/logos/logo-header.png" alt="Logo Verónica Killian" style="width: 100px; height: auto;" />
        </div>
      </body>
      `
    )

    await this.sendMail(notification)
    await this.sendMail(mailToSend)

    alert('Mensaje enviado correctamente')
    this.myForm.reset()
  }
}
