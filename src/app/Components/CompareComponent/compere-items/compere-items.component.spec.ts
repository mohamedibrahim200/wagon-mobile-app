import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompereItemsComponent } from './compere-items.component';

describe('CompereItemsComponent', () => {
  let component: CompereItemsComponent;
  let fixture: ComponentFixture<CompereItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompereItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompereItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
