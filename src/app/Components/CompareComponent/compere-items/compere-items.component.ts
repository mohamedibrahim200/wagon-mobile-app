import { Component } from '@angular/core';
import { HeaderCompereComponent } from '../header-compere/header-compere.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-compere-items',
  standalone: true,
  imports: [HeaderCompereComponent , FooterComponent],
  templateUrl: './compere-items.component.html',
  styleUrl: './compere-items.component.css'
})
export class CompereItemsComponent {

}
