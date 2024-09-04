import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyHeadComponent } from './agency-head.component';

describe('AgencyHeadComponent', () => {
  let component: AgencyHeadComponent;
  let fixture: ComponentFixture<AgencyHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyHeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgencyHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
