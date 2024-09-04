import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  constructor(private router: Router) {}
  PopupOpen = false; // للتحكم في النافذة الرئيسية
  isPopupOpencountrys = false; // للتحكم في نافذة اختيار الدولة
  selectedCountry: string = 'Egypt'; // الدولة الافتراضية
  countries: string[] = ['Egypt', 'USA', 'Germany', 'France' , 'USA', 'Germany', 'France' , 'USA', 'Germany', 'France' ,'USA', 'Germany', 'France']; // قائمة الدول

  openPopup() {
    this.PopupOpen = true;
  }

  closePop() {
    this.PopupOpen = false;
  }

  openPopupcountrys() {
    this.isPopupOpencountrys = true;
  }

  closePopupcountrys() {
    this.isPopupOpencountrys = false;
  }

  selectCountry(country: string) {
    this.selectedCountry = country;
    this.closePopupcountrys(); // إغلاق نافذة اختيار الدولة بعد التحديد
  }
}
