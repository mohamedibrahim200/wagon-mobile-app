import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSearchRuseltFilterComponent } from './page-search-ruselt-filter.component';

describe('PageSearchRuseltFilterComponent', () => {
  let component: PageSearchRuseltFilterComponent;
  let fixture: ComponentFixture<PageSearchRuseltFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSearchRuseltFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageSearchRuseltFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
