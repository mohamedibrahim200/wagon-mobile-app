import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCarDetailsComponent } from './page-car-details.component';

describe('PageCarDetailsComponent', () => {
  let component: PageCarDetailsComponent;
  let fixture: ComponentFixture<PageCarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCarDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageCarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
