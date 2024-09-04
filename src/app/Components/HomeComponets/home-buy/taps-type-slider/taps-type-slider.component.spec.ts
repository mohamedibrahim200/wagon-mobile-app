import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapsTypeSliderComponent } from './taps-type-slider.component';

describe('TapsTypeSliderComponent', () => {
  let component: TapsTypeSliderComponent;
  let fixture: ComponentFixture<TapsTypeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TapsTypeSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TapsTypeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
