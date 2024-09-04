import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRuseltFilterComponent } from './search-ruselt-filter.component';

describe('SearchRuseltFilterComponent', () => {
  let component: SearchRuseltFilterComponent;
  let fixture: ComponentFixture<SearchRuseltFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchRuseltFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchRuseltFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
