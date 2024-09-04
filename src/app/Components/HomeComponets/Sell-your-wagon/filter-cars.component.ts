import { routes } from './../../../app.routes';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-cars',
  standalone: true,
  imports: [],
  templateUrl: './filter-cars.component.html',
  styleUrl: './filter-cars.component.css'
})
export class FilterCarsComponent {
  constructor(private router: Router) {}
  goto(Pash: string){
    this.router.navigate([Pash]);
  }
}
