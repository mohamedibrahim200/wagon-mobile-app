import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderCompereComponent } from '../header-compere/header-compere.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Items } from '../../../iteams';

@Component({
  selector: 'app-compere',
  standalone: true,
  imports: [FooterComponent , HeaderCompereComponent ,CommonModule ],
  templateUrl: './compere.component.html',
  styleUrl: './compere.component.css'
})
export class CompereComponent {
item:Items []=[
  {
    brand:   'Volvo',
    model:   'S60 T4',
    year:     2015,
    color:   'Black',
    mileage: 90.000,
    price:   350000 ,
    image:   'assets/car13.jpg'
  } ,
  {
    brand:   'Volvo',
    model:   'S60 T4',
    year:     2015,
    color:   'Black',
    mileage: 90.000,
    price:  350000 ,
    image:   'assets/ca14.jpg'
  } ,  {
    brand:   'Volvo',
    model:   'S60 T4',
    year:     2015,
    color:   'Black',
    mileage: 90.000,
    price:  350000 ,
    image:   'assets/car12.jpg'
  } ,  {
    brand:   'Volvo',
    model:   'S60 T4',
    year:     2015,
    color:   'Black',
    mileage: 90.000,
    price:  350000 ,
    image:   'assets/car10.jpg'
  } 
]; 
  showItems = true;
  constructor(private router: Router) {}
navigateTo(){
  this.router.navigate(['/compereitems'])
}
navigateToHome(){
  this.router.navigate(['/Sell'])
}
}
