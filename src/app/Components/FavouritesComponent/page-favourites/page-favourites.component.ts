import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { HeadFavouritesComponent } from '../head-favourites/head-favourites.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';
import { Items } from '../../../iteams';

@Component({
  selector: 'app-page-favourites',
  standalone: true,
  imports: [HeadFavouritesComponent , CommonModule , FooterComponent],
  templateUrl: './page-favourites.component.html',
  styleUrl: './page-favourites.component.css'
})
export class PageFavouritesComponent {
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
    },{
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
