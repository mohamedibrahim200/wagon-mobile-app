import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadYourCarInformationComponent } from './head-your-car-information.component';

describe('HeadYourCarInformationComponent', () => {
  let component: HeadYourCarInformationComponent;
  let fixture: ComponentFixture<HeadYourCarInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadYourCarInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadYourCarInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
