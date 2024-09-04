import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFavouritesComponent } from './page-favourites.component';

describe('PageFavouritesComponent', () => {
  let component: PageFavouritesComponent;
  let fixture: ComponentFixture<PageFavouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageFavouritesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
