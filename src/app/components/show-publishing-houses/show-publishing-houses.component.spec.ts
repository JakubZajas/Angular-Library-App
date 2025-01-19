import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPublishingHousesComponent } from './show-publishing-houses.component';

describe('ShowPublishingHousesComponent', () => {
  let component: ShowPublishingHousesComponent;
  let fixture: ComponentFixture<ShowPublishingHousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowPublishingHousesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPublishingHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
