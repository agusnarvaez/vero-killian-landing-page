import { FormsModule } from '@angular/forms'
import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ContactFormComponent } from '../../sections/contact/contact-form/contact-form.component'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(
    private metaTagService: Meta,
    private titleService: Title,
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Contáctanos - Verónica Killian Inmobiliaria')
    this.metaTagService.updateTag({
      name: 'description',
      content:
        '¿Interesado en servicios inmobiliarios? Contacta a Verónica Killian para consultas y asesoramiento experto. Encuentra aquí toda la información de contacto.',
    })
    this.metaTagService.updateTag({
      name: 'keywords',
      content:
        ' Contacto inmobiliario, consulta inmobiliaria, asesoramiento en bienes raíces, información de contacto, servicios de Verónica Killian',
    })

    this.metaTagService.updateTag({
      property: 'og:title',
      content: 'Contáctanos - Verónica Killian Inmobiliaria',
    })
    this.metaTagService.updateTag({
      property: 'og:description',
      content:
        '¿Interesado en servicios inmobiliarios? Contacta a Verónica Killian para consultas y asesoramiento experto. Encuentra aquí toda la información de contacto.',
    })
    this.metaTagService.updateTag({
      property: 'og:url',
      content: 'https://www.veritokillian.ar/contacto',
    })

    this.metaTagService.updateTag({
      name: 'twitter:title',
      content: 'Contáctanos - Verónica Killian Inmobiliaria',
    })
    this.metaTagService.updateTag({
      name: 'twitter:description',
      content:
        '¿Interesado en servicios inmobiliarios? Contacta a Verónica Killian para consultas y asesoramiento experto. Encuentra aquí toda la información de contacto.',
    })
    this.metaTagService.updateTag({
      name: 'twitter:url',
      content: 'https://www.veritokillian.ar/contacto',
    })

    const top = document.getElementById('contact-top')
    top?.scrollIntoView({
      behavior: 'auto',
      block: 'start',
    })
  }
}
