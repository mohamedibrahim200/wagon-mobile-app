import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCompereComponent } from './header-compere.component';

describe('HeaderCompereComponent', () => {
  let component: HeaderCompereComponent;
  let fixture: ComponentFixture<HeaderCompereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCompereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderCompereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
