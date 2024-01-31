import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeBannerComponent } from '../../sections/home/home-banner/home-banner.component'
import { HomeFaqComponent } from '../../sections/home/home-faq/home-faq.component'
import { HomeReviewsComponent } from '../../sections/home/home-reviews/home-reviews.component'
import { HomeContactComponent } from '../../sections/home/home-contact/home-contact.component'
import { HomeIdentityComponent } from '../../sections/home/home-identity/home-identity.component'
import { HomeWorkComponent } from '../../sections/home/home-work/home-work.component'


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HomeBannerComponent,
    HomeReviewsComponent,
    HomeFaqComponent,
    HomeContactComponent,
    HomeIdentityComponent,
    HomeWorkComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
