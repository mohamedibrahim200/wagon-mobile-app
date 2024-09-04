import { Component } from '@angular/core';
import { routes } from '../../../app.routes';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buy-to-sell',
  standalone: true,
  imports: [],
  templateUrl: './buy-to-sell.component.html',
  styleUrl: './buy-to-sell.component.css'
})
export class BuyToSellComponent {
  constructor(private router: Router) { }
  navigateToBuy(path: string) {

    this.router.navigate([path]);
}
navigateToSell(path: string){
  this.router.navigate([path]);
}
}
