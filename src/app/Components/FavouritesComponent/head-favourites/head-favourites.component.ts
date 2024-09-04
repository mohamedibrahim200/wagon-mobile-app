import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head-favourites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './head-favourites.component.html',
  styleUrl: './head-favourites.component.css'
})
export class HeadFavouritesComponent {
  isMenuOpen = false;
  isSubMenuOpen = false;

  constructor(private router: Router) {}

  toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSubMenu() {
      this.isSubMenuOpen = !this.isSubMenuOpen;
  }
  navigateTo(path: string) {
      this.router.navigate([path]);
  }
  navigateAndCloseSubMenu(path: string) {
      this.navigateTo(path);
      this.isSubMenuOpen = false;
      this.toggleMenu();
  }
  to(Pash: string){
    this.router.navigate([Pash]);
  }
}
