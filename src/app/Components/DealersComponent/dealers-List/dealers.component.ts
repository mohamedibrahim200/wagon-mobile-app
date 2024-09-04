import { Component } from '@angular/core';
import { DealerHeaderComponent } from "../dealers-header/dealer-header.component";
import { FooterComponent } from "../../footer/footer.component";
import { ListToMapComponent } from "../../AgencyComponent/list-to-map/list-to-map.component";
import { ListToMapsComponent } from '../list-to-map/list-to-map.component';
import { CommonModule } from '@angular/common';
import { Items2 } from '../../../iteams';


@Component({
  selector: 'app-dealers',
  standalone: true,
  imports: [DealerHeaderComponent, FooterComponent, 
    ListToMapComponent, ListToMapsComponent , CommonModule],
  templateUrl: './dealers.component.html',
  styleUrl: './dealers.component.css'
})
export class DealersComponent {
  Items: Items2[] = [
    {
      brand: 'Volvo',
      openfrom : 2015,
      closeto : 2020,
      city : 'Nasr City',
      number : 223856975,
      image : 'assets/dealersImage.png'
      } ,
      {
        brand: 'Volvo',
        openfrom : 2015,
        closeto : 2020,
        city : 'Nasr City',
        number : 223856975,
        image : 'assets/dealersImage.png'
      },
      {
        brand: 'Volvo',
        openfrom : 2015,
        closeto : 2020,
        city : 'Nasr City',
        number : 223856975,
        image : 'assets/dealersImage.png'
      },
      {
        brand: 'Volvo',
        openfrom : 2015,
        closeto : 2020,
        city : 'Nasr City',
        number : 223856975,
        image : 'assets/dealersImage.png'
      },
      {
        brand: 'Volvo',
        openfrom : 2015,
        closeto : 2020,
        city : 'Nasr City',
        number : 223856975,
        image : 'assets/dealersImage.png'
      }
]
}
