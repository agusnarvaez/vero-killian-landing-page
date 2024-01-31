import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HomeIdentityComponent } from './home-identity.component'

describe('HomeIdentityComponent', () => {
  let component: HomeIdentityComponent
  let fixture: ComponentFixture<HomeIdentityComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeIdentityComponent]
    })
    .compileComponents()

    fixture = TestBed.createComponent(HomeIdentityComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
