import { Component } from '@angular/core';
import { HeadYourCarInformationComponent } from "../head-your-car-information/head-your-car-information.component";
import { YourCarInformationtitemComponent } from "../your-car-informationtitem/your-car-informationtitem.component";

@Component({
  selector: 'app-page-your-car-info',
  standalone: true,
  imports: [HeadYourCarInformationComponent, YourCarInformationtitemComponent],
  templateUrl: './page-your-car-info.component.html',
  styleUrl: './page-your-car-info.component.css'
})
export class PageYourCarInfoComponent {

}
