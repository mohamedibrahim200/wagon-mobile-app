import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Items } from '../../../../iteams';
import { FooterComponent } from "../../../footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-search-ruselt-filter',
  standalone: true,
  imports: [FooterComponent , CommonModule],
  templateUrl: './page-search-ruselt-filter.component.html',
  styleUrl: './page-search-ruselt-filter.component.css'
})
export class PageSearchRuseltFilterComponent {
  item : Items[] = [
    {
      brand: 'Volvo',
      model: 'S60 T4',
      year: 2015,
      color: 'Black',
      mileage: 90.000,
      price: 350000,
      image: 'assets/typecar.png'
    },
    {
      brand: 'Volvo',
      model: 'S60 T4',
      year: 2015,
      color: 'Black',
      mileage: 90.000,
      price: 350000,
      image: 'assets/typecar.png'
    },
    {
      brand: 'Volvo',
      model: 'S60 T4',
      year: 2015,
      color: 'Black',
      mileage: 90.000,
      price: 350000,
      image: 'assets/typecar.png'
    },
    {
      brand: 'Volvo',
      model: 'S60 T4',
      year: 2015,
      color: 'Black',
      mileage: 90.000,
      price: 350000,
      image: 'assets/typecar.png'
    },
    {
      brand: 'Volvo',
      model: 'S60 T4',
      year: 2015,
      color: 'Black',
      mileage: 90.000,
      price: 350000,
      image: 'assets/typecar.png'
    },
  ];
  showItems = true;
  constructor(private router: Router) {}
  navigateToHome(){
    this.router.navigate(['/Sell'])
  }
}
