import { CommonModule } from '@angular/common';
import { AfterViewInit, Component ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-taps-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taps-slider.component.html',
  styleUrl: './taps-slider.component.css'
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TapsSliderComponent  implements AfterViewInit {
  ngAfterViewInit(): void {
    new Swiper('.taps_swiper_container', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000, 
      },
    });
  }
  categories = [
    { name: 'Category 1', image: 'assets/car.svg' },
    { name: 'Category 2', image: 'assets/motor.svg' },
    { name: 'Category 3', image: 'assets/truck.svg' },
    { name: 'Category 4', image: 'assets/bus.svg' },
    { name: 'Category 5', image: 'assets/farm.svg' },
    { name: 'Category 6', image: 'assets/car.svg' },
    { name: 'Category 7', image: 'assets/bus.svg' },
    { name: 'Category 8', image: 'assets/truck.svg' }
  ]; 
}

