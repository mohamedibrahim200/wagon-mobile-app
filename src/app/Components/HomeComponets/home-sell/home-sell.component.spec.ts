import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSellComponent } from './home-sell.component';

describe('HomeSellComponent', () => {
  let component: HomeSellComponent;
  let fixture: ComponentFixture<HomeSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
