import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerMapComponent } from './dealer-map.component';

describe('DealerMapComponent', () => {
  let component: DealerMapComponent;
  let fixture: ComponentFixture<DealerMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealerMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DealerMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
