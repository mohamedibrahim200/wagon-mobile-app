import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyToSellComponent } from './buy-to-sell.component';

describe('BuyToSellComponent', () => {
  let component: BuyToSellComponent;
  let fixture: ComponentFixture<BuyToSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyToSellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyToSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
