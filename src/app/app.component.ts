import { FooterComponent } from './Components/footer/footer.component';
import { Component ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderMenuComponent } from './Components/HomeComponets/header-menu/header-menu.component';
import { IntroLoginComponent } from './Components/PaymentComponent/Login/intro-login/intro-login.component';
import { SignInComponent } from './Components/PaymentComponent/Login/sign-in/sign-in.component';
import { PageFavouritesComponent } from './Components/FavouritesComponent/page-favourites/page-favourites.component';
import { CommonModule } from '@angular/common';
import { CompereItemsComponent } from './Components/CompareComponent/compere-items/compere-items.component';
import { TestComponent } from "./test/test.component";
import { HttpClientModule } from '@angular/common/http';
import { PageYourCarInfoComponent } from "./Components/HomeComponets/yourInformation/page-your-car-info/page-your-car-info.component";
import Swiper from 'swiper';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderMenuComponent, FooterComponent,
    IntroLoginComponent, SignInComponent, PageFavouritesComponent,
    CommonModule, CompereItemsComponent, TestComponent, 
    HttpClientModule, PageYourCarInfoComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'wagonMobilApp';
 
}
