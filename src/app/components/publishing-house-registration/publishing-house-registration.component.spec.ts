import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishingHouseRegistrationComponent } from './publishing-house-registration.component';

describe('PublishingHouseRegistrationComponent', () => {
  let component: PublishingHouseRegistrationComponent;
  let fixture: ComponentFixture<PublishingHouseRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishingHouseRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishingHouseRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
