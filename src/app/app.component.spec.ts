import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import './app.module'
import { ActivatedRoute } from '@angular/router'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,

      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                title: 'vero-killian-landing-page'
              }
            }
          }
        }
      ]
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have the 'vero-killian-landing-page' title`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('vero-killian-landing-page')
  })

})
