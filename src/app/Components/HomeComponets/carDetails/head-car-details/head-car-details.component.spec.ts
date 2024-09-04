import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadCarDetailsComponent } from './head-car-details.component';

describe('HeadCarDetailsComponent', () => {
  let component: HeadCarDetailsComponent;
  let fixture: ComponentFixture<HeadCarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadCarDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadCarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
