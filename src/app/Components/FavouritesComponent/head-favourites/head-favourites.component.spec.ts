import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadFavouritesComponent } from './head-favourites.component';

describe('HeadFavouritesComponent', () => {
  let component: HeadFavouritesComponent;
  let fixture: ComponentFixture<HeadFavouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadFavouritesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
