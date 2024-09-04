import { Component } from '@angular/core';
import { HeaderSearchRuseltFilterComponent } from "./header-search-ruselt-filter/header-search-ruselt-filter.component";
import { PageSearchRuseltFilterComponent } from "./page-search-ruselt-filter/page-search-ruselt-filter.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-search-ruselt-filter',
  standalone: true,
  imports: [HeaderSearchRuseltFilterComponent, PageSearchRuseltFilterComponent, FooterComponent],
  templateUrl: './search-ruselt-filter.component.html',
  styleUrl: './search-ruselt-filter.component.css'
})
export class SearchRuseltFilterComponent {

}
