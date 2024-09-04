import { Router } from '@angular/router';
import { routes } from './../../../../app.routes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-your-car-informationtitem',
  standalone: true,
  imports: [],
  templateUrl: './your-car-informationtitem.component.html',
  styleUrl: './your-car-informationtitem.component.css'
})
export class YourCarInformationtitemComponent {
  constructor(private router: Router) {}
  goto(Pash: string){
    this.router.navigate([Pash]);
  }
}
