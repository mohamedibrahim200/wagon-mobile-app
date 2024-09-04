import { routes } from './../../../app.routes';
import { Component } from '@angular/core';
import { TapsTypeSliderComponent } from './taps-type-slider/taps-type-slider.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { BuyToSellComponent } from '../buy-to-sell/buy-to-sell.component';
import { FooterComponent } from '../../footer/footer.component';
import { MapComponent } from '../../map/map.component';

import { TapsSliderComponent } from "../home-sell/taps-slider/taps-slider.component";

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { COUNTRIES } from '../../../iteams';
import { FilterpopupComponent } from "./filterpopup/filterpopup.component";

@Component({
  selector: 'app-home-buy',
  standalone: true,
  imports: [MapComponent, TapsTypeSliderComponent, HeaderMenuComponent,
    BuyToSellComponent, FooterComponent,
    TapsSliderComponent, CommonModule, FilterpopupComponent],
  templateUrl: './home-buy.component.html',
  styleUrl: './home-buy.component.css'
})
export class HomeBuyComponent {
  isPopupOpens = false;
  isCountryPopupOpen = false;
  isCityPopupOpen = false;
  selectedCountry: string = 'Egypt';
  selectedProvince: string = '';
  countries: string[] = COUNTRIES.map(country => country.name);
  provinces: string[] = [];
  cities: string[] = [];

  // دالة لفتح النافذة المنبثقة الخاصة بالبلدان
  openCountryPopup() {
    this.isCountryPopupOpen = true;
  }

  // دالة لإغلاق النافذة المنبثقة الخاصة بالبلدان
  closeCountryPopup() {
    this.isCountryPopupOpen = false;
  }

  // دالة لاختيار البلد من القائمة وتحديث قائمة المحافظات
  selectCountry(countryName: string) {
    this.selectedCountry = countryName;
    const selected = COUNTRIES.find(country => country.name === countryName);
    this.provinces = selected ? selected.provinces : [];
    this.selectedProvince = this.provinces.length > 0 ? this.provinces[0] : '';
    this.cities = []; // امسح المدن عند تغيير البلد
    this.closeCountryPopup();
  }

  // دالة لفتح نافذة المدن بناءً على اختيار المحافظة
  openCityPopup() {
    this.isCityPopupOpen = true;
  }

  // دالة لإغلاق نافذة المدن
  closeCityPopup() {
    this.isCityPopupOpen = false;
  }

  // دالة لاختيار المحافظة من القائمة وتحديث قائمة المدن
  selectProvince(province: string) {
    this.selectedProvince = province;
    const selected = COUNTRIES.find(country => country.name === this.selectedCountry);
    this.cities = selected ? selected.provinces : []; // في حال كان هناك بيانات للمدن، قم بتحديث القائمة
    this.openCityPopup();
  }

  // دالة لفتح النوافذ المنبثقة
  openPopups() {
    this.isPopupOpens = true;
  }

  // دالة لإغلاق النوافذ المنبثقة
  closePopups() {
    this.isPopupOpens = false;
    this.isCityPopupOpen = false; // أغلق نافذة المدن عند إغلاق النافذة الرئيسية
  }

  constructor(private router: Router) {}
  toggleToRuseltSearchFilter() {
    this.router.navigate(['/RuseltSearchFilter']);
  }
}
