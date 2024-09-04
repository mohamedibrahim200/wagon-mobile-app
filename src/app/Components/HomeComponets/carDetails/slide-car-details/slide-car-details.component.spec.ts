import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCarDetailsComponent } from './slide-car-details.component';

describe('SlideCarDetailsComponent', () => {
  let component: SlideCarDetailsComponent;
  let fixture: ComponentFixture<SlideCarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideCarDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlideCarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
