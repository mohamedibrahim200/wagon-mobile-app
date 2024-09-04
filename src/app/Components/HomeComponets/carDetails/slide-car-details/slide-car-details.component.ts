import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-slide-car-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide-car-details.component.html',
  styleUrl: './slide-car-details.component.css'
})
export class SlideCarDetailsComponent  implements AfterViewInit {
  slides = [
    { img: 'assets/productCar.png' },
    { img: 'assets/car10.jpg' },
    { img: 'assets/car11.jpg' },
    { img: 'assets/car12.jpg' },
    { img: 'assets/car13.jpg' }
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
      autoplay: {
        delay: 2000, // Delay in ms
      },
    });
  }
}


