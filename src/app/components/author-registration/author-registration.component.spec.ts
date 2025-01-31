import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorRegistrationComponent } from './author-registration.component';

describe('AuthorRegistrationComponent', () => {
  let component: AuthorRegistrationComponent;
  let fixture: ComponentFixture<AuthorRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
