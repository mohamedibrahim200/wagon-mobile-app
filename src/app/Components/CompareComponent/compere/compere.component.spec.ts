import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompereComponent } from './compere.component';

describe('CompereComponent', () => {
  let component: CompereComponent;
  let fixture: ComponentFixture<CompereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
