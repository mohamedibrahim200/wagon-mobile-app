import { Component } from '@angular/core';
import { HeaderYourProfileComponent } from "../header-your-profile/header-your-profile.component";

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-your-profile',
  standalone: true,
  imports: [HeaderYourProfileComponent , CommonModule],
  templateUrl: './your-profile.component.html',
  styleUrl: './your-profile.component.css'
})
export class YourProfileComponent {
  isCollapsed: boolean = false; 
  isCollapsed2: boolean = false; 
  isCollapsed3: boolean = false; 
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed; 
  }
  toggleCollapse2() {
    this.isCollapsed2 = !this.isCollapsed2; 
  }
  toggleCollapse3() {
    this.isCollapsed3 = !this.isCollapsed3; 
  }
}
