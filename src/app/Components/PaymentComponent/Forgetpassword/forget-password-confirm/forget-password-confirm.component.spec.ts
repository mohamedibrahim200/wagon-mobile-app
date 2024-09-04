import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordConfirmComponent } from './forget-password-confirm.component';

describe('ForgetPasswordConfirmComponent', () => {
  let component: ForgetPasswordConfirmComponent;
  let fixture: ComponentFixture<ForgetPasswordConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgetPasswordConfirmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForgetPasswordConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
