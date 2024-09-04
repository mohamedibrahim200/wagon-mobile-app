import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  activeItem: string = 'home';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateActiveItem(event.urlAfterRedirects);
        this.resetScrollPosition(); // Reset scroll position on navigation
      }
    });
  }

  setActive(item: string, path: string) {
    this.router.navigate([path]);
    this.activeItem = item;
  }

  isActive(item: string): boolean {
    return this.activeItem === item;
  }

  updateActiveItem(url: string) {
    if (url === '/Sell' || url === '/Buy') {
      this.activeItem = 'home';
    } else if (url === '/Favourites') {
      this.activeItem = 'favourites';
    } else if (url === '/Compere') {
      this.activeItem = 'compare';
    } else if (url === '/Listagency' || url === '/Mapagency') {
      this.activeItem = 'agency';
    } else if (url === '/Listdelars' || url === '/MapDealers') {
      this.activeItem = 'delars';
    } else {
      this.activeItem = '';
    }
  }

  resetScrollPosition() {
    window.scrollTo(0, 0); 
  }
}
