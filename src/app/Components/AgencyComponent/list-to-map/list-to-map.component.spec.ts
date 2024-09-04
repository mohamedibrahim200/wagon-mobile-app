import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListToMapComponent } from './list-to-map.component';

describe('ListToMapComponent', () => {
  let component: ListToMapComponent;
  let fixture: ComponentFixture<ListToMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListToMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListToMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
