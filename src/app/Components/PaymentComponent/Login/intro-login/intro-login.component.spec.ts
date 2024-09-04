import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroLoginComponent } from './intro-login.component';

describe('IntroLoginComponent', () => {
  let component: IntroLoginComponent;
  let fixture: ComponentFixture<IntroLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
