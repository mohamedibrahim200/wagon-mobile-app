import { Component } from '@angular/core';
import { DealerHeaderComponent } from "../dealers-header/dealer-header.component";
import { ListToMapsComponent } from "../list-to-map/list-to-map.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-dealer-map',
  standalone: true,
  imports: [DealerHeaderComponent, ListToMapsComponent, FooterComponent],
  templateUrl: './dealer-map.component.html',
  styleUrl: './dealer-map.component.css'
})
export class DealerMapComponent {

}
