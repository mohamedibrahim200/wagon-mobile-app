import { Component, OnInit } from '@angular/core';
import { TapsSliderComponent } from './taps-slider/taps-slider.component';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { BuyToSellComponent } from '../buy-to-sell/buy-to-sell.component';
import { Items3 } from '../../../iteams';
import { CommonModule } from '@angular/common';
import { FilterCarsComponent } from "../Sell-your-wagon/filter-cars.component";
import { CarSellingComponent } from "../car-selling/car-selling.component";

@Component({
  selector: 'app-home-sell',
  standalone: true,
  imports: [TapsSliderComponent, HeaderMenuComponent,
    CommonModule, BuyToSellComponent, FooterComponent, FilterCarsComponent, CarSellingComponent],
  templateUrl: './home-sell.component.html',
  styleUrl: './home-sell.component.css'
})
export class HomeSellComponent {
 
}
