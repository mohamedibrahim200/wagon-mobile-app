import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSearchRuseltFilterComponent } from './header-search-ruselt-filter.component';

describe('HeaderSearchRuseltFilterComponent', () => {
  let component: HeaderSearchRuseltFilterComponent;
  let fixture: ComponentFixture<HeaderSearchRuseltFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSearchRuseltFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderSearchRuseltFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
