import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourCarInformationtitemComponent } from './your-car-informationtitem.component';

describe('YourCarInformationtitemComponent', () => {
  let component: YourCarInformationtitemComponent;
  let fixture: ComponentFixture<YourCarInformationtitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourCarInformationtitemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourCarInformationtitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
