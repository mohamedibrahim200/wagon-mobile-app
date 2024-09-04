import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { HeadCarDetailsComponent } from "../head-car-details/head-car-details.component";
import { CommonModule } from '@angular/common';
import { SlideCarDetailsComponent } from "../slide-car-details/slide-car-details.component";
import { CarinfoToSellerinfoComponent } from "../carinfo-to-sellerinfo/carinfo-to-sellerinfo.component";

@Component({
  selector: 'app-page-car-details',
  standalone: true,
  imports: [HeadCarDetailsComponent, CommonModule, SlideCarDetailsComponent, CarinfoToSellerinfoComponent],
  templateUrl: './page-car-details.component.html',
  styleUrl: './page-car-details.component.css'
})
export class PageCarDetailsComponent implements AfterViewInit {
  slides = [
    { img: 'assets/productCar.png' },
    { img: 'assets/productCar.png' },
    { img: 'assets/productCar.png' },
    { img: 'assets/productCar.png' },
    { img: 'assets/productCar.png' }
  ];
  ngAfterViewInit(): void {
    const swiper = new Swiper('.detailsCarSwiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
