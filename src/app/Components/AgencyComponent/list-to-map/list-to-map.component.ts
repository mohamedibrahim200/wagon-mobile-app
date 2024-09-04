import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-list-to-map',
  standalone: true,
  imports: [],
  templateUrl: './list-to-map.component.html',
  styleUrl: './list-to-map.component.css'
})
export class ListToMapComponent {
constructor(private router: Router) { }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }
}
