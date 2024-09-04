import { Items, Items2 } from './../../../iteams';
import { Component } from '@angular/core';
import { AgencyHeadComponent } from "../agency-head/agency-head.component";
import { ListToMapComponent } from "../list-to-map/list-to-map.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../footer/footer.component";
import { AgencyMapComponent } from '../agency-map/agency-map.component';

@Component({
  selector: 'app-agency',
  standalone: true,
  imports: [AgencyHeadComponent, ListToMapComponent, CommonModule, FooterComponent ,AgencyMapComponent],
  templateUrl: './agency.component.html',
  styleUrl: './agency.component.css'
})
export class AgencyComponent {
Items: Items2[] = [
    {
      brand: 'Volvo',
      openfrom : 2015,
      closeto : 2020,
      city : 'Nasr City',
      number : 223856975,
      image : 'assets/ford.png'
      } ,
      {
        brand: 'Volvo',
        openfrom : 2015,
        closeto : 2020,
        city : 'Nasr City',
        number : 223856975,
        image : 'assets/ford.png'
      },
      {
        brand: 'Volvo',
        openfrom : 2015,
        closeto : 2020,
        city : 'Nasr City',
        number : 223856975,
        image : 'assets/ford.png'
      },
      {
        brand: 'Volvo',
        openfrom : 2015,
        closeto : 2020,
        city : 'Nasr City',
        number : 223856975,
        image : 'assets/ford.png'
      },
      {
        brand: 'Volvo',
        openfrom : 2015,
        closeto : 2020,
        city : 'Nasr City',
        number : 223856975,
        image : 'assets/ford.png'
      }
]
}
