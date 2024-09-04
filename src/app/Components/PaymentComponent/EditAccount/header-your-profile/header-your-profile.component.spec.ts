import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderYourProfileComponent } from './header-your-profile.component';

describe('HeaderYourProfileComponent', () => {
  let component: HeaderYourProfileComponent;
  let fixture: ComponentFixture<HeaderYourProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderYourProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderYourProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
