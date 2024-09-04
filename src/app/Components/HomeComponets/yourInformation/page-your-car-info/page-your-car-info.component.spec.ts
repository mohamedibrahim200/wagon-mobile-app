import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageYourCarInfoComponent } from './page-your-car-info.component';

describe('PageYourCarInfoComponent', () => {
  let component: PageYourCarInfoComponent;
  let fixture: ComponentFixture<PageYourCarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageYourCarInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageYourCarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
