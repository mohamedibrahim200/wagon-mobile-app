
import { Component ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterComponent } from "../../../footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-taps-type-slider',
  standalone: true,
  imports: [FooterComponent , CommonModule],
  templateUrl: './taps-type-slider.component.html',
  styleUrl: './taps-type-slider.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TapsTypeSliderComponent {
  categories = [
    { name: 'Category 1', image: 'assets/type_M.svg' },
    { name: 'Category 2', image: 'assets/type_A.svg' },
    { name: 'Category 3', image: 'assets/type_W.svg' },
    { name: 'Category 4', image: 'assets/type_C.svg' },
    { name: 'Category 5', image: 'assets/type_M.svg' },
    { name: 'Category 6', image: 'assets/type_W.svg' },
    { name: 'Category 7', image: 'assets/type_A.svg' },
    { name: 'Category 8', image: 'assets/type_C.svg' }
  ];  
}
