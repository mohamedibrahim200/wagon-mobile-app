import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-compere',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-compere.component.html',
  styleUrl: './header-compere.component.css'
})
export class HeaderCompereComponent {
  isMenuOpen = false;
  isSubMenuOpen = false;

  constructor(private router: Router) {}
  to(Pash: string){
    this.router.navigate([Pash]);
  }
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
}
