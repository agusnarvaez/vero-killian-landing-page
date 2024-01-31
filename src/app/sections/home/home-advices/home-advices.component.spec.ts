import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HomeAdvicesComponent } from './home-advices.component'

describe('HomeAdvicesComponent', () => {
  let component: HomeAdvicesComponent
  let fixture: ComponentFixture<HomeAdvicesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAdvicesComponent]
    })
    .compileComponents()

    fixture = TestBed.createComponent(HomeAdvicesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
