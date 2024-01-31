import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-home-identity',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home-identity.component.html',
  styleUrl: './home-identity.component.css'
})
export class HomeIdentityComponent {

}
