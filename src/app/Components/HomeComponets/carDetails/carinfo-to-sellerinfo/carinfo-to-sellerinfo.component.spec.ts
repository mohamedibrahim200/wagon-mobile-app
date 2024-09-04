import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarinfoToSellerinfoComponent } from './carinfo-to-sellerinfo.component';

describe('CarinfoToSellerinfoComponent', () => {
  let component: CarinfoToSellerinfoComponent;
  let fixture: ComponentFixture<CarinfoToSellerinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarinfoToSellerinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarinfoToSellerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
