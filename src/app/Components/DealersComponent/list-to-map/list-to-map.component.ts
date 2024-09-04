import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-list-to-maps',
  standalone: true,
  imports: [],
  templateUrl: './list-to-map.component.html',
  styleUrl: './list-to-map.component.css'
})
export class ListToMapsComponent {
//   navigateTo(path: string) {
//     if(path === '/agency'){
//       this.router.navigate(['/agency']);
//     }else{
//       this.router.navigate(['/Map']);
//     }
// }
activeTab: string = '/List';
constructor(private router: Router) {
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      this.updateActiveTab(event.urlAfterRedirects);
    }
  });
}

navigateTo(path: string) {
  this.router.navigate([path]);
  this.activeTab = path;
}

isActive(path: string): boolean {
  return this.activeTab === path;
}

updateActiveTab(url: string) {
  if (url === '/Map' || url === '/List') {
    this.activeTab = url;
  } else {
    this.activeTab = '/List';
  }
}
navigateToMap(path: string){
  this.router.navigate([path]);
}
}
