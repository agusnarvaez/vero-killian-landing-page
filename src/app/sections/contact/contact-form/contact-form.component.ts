import { Component, Input, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, NgForm } from '@angular/forms'
import { EmailService } from '../../../services/email/email.service'
import { Mail } from '../../../models/mail'

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  @ViewChild('myForm') myForm!: NgForm
  message: string = ''
  fullName: string = ''
  email: string = ''
  phone: string = ''

  @Input() subject: string = ''
  showSubject = true
  constructor(public emailService: EmailService) {}
  ngOnInit() {
    if (this.subject !== '') {
      this.showSubject = false
    }
  }

  sendMail = (mailToSend: Mail) => {
    this.emailService.sendEmail(mailToSend).subscribe({
      next: (response) => {
        console.info(response)
      },
      error: (error) => {
        console.error(error)
      },
    })
  }

  async onSubmit() {
    const notification = new Mail(
      /* 'inmobiliaria@veritokillian.ar', */
      'agus.narvaez@outlook.com',
      'no_reply@veritokillian.ar',
      `Nuevo mensaje de ${this.fullName} - ${this.subject}`,
      this.message,
      `
      <body style="width:100%; height: 100%; background-color: #475838; font-size: 10px; padding: 5% 0;">
        <h1 style="padding: 0 5%; font-size: 15px; color: #9D9480">Hola Vero! - Tenés un nuevo mensaje de ${this.fullName}</h1>
        <h2 style="padding: 0 5%;  font-size: 12px; color: #9D9480">${this.subject}</h2>
        <p style="padding: 0 5%; font-size: 12px; color: #9D9480">${this.message}</p>
        <p style="padding: 0 5%; font-size: 12px; color: #9D9480">${this.email}</p>
        <p style="padding: 0 5%; font-size: 12px; color: #9D9480">${this.phone}</p>
        <div style="background-color: #475838; text-align: center; padding: 10px;">
          <img src="https://veritokillian.ar/assets/logos/logo-footer.webp" alt="Logo Verónica Killian" style="width: 100px; height: auto;" />
        </div>
      </body>
      `,
    )
    notification.cc = 'agus.narvaez@outlook.com'

    const mailToSend = new Mail(
      this.email,
      'no_reply@veritokillian.ar',
      `Solicitud de información - ${this.subject}`,
      'Gracias por contactarte con nosotros, en breve nos pondremos en contacto con vos.',
      `
      <body style="width:100%; height: 100%; background-color: #475838; font-size: 10px; padding: 5% 0;">
        <h1 style="padding: 0 5%; font-size: 15px; color: #9D9480" >Hola ${this.fullName}! - Gracias por contactarte con nosotros</h1>
        <h2 style="padding: 0 5%; font-size: 12px; color: #9D9480" >Tu consulta sobre ${this.subject} ya fue enviada</h2>
        <p style="padding: 0 5%; font-size: 12px; color: #9D9480" >Te estaremos contestando a la brevedad</p>
        <div style="background-color: #475838; text-align: center; padding: 10px;">
          <img src="https://veritokillian.ar/assets/logos/logo-footer.webp" alt="Logo Verónica Killian" style="width: 100px; height: auto;" />
        </div>
      </body>
      `,
    )

    this.sendMail(notification)
    this.sendMail(mailToSend)

    alert('Mensaje enviado correctamente')
    this.myForm.reset()
  }
}
