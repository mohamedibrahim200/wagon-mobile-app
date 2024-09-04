import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.css'
})
export class HeaderMenuComponent {
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
