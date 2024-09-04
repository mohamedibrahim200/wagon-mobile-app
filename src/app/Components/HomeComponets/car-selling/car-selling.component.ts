import { Component, OnInit } from '@angular/core';
import { Items3 } from '../../../iteams';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import path from 'path';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-selling',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-selling.component.html',
  styleUrl: './car-selling.component.css'
})
export class CarSellingComponent implements OnInit {
    items: Items3[] = [];
    constructor(private http: HttpClient , private router: Router) {}
    ngOnInit(): void {
      this.http.get('assets/FavItems.json')
        .subscribe((data: any) => {
          this.items = data.items;
        });
    }
    activeButtonIndex: number | null = null;
    setActiveButton(index: number, isBuy: boolean) {
      this.items[index].isBuyActive = isBuy;
    }
    goto(){
      this.router.navigate(['/cardetails']);
    }
  }