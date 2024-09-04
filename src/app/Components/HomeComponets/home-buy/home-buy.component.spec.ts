import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBuyComponent } from './home-buy.component';

describe('HomeBuyComponent', () => {
  let component: HomeBuyComponent;
  let fixture: ComponentFixture<HomeBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBuyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
