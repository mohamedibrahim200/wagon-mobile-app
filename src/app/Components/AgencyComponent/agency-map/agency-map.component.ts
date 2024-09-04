import { Component } from '@angular/core';
import { AgencyHeadComponent } from "../agency-head/agency-head.component";
import { ListToMapComponent } from "../list-to-map/list-to-map.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-agency-map',
  standalone: true,
  imports: [AgencyHeadComponent, ListToMapComponent, FooterComponent],
  templateUrl: './agency-map.component.html',
  styleUrl: './agency-map.component.css'
})
export class AgencyMapComponent {

}
