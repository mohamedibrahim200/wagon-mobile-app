import { Routes } from '@angular/router';
import { HomeCategoryComponent } from './Components/HomeComponets/home-category/home-category.component';
import { HomeBuyComponent } from './Components/HomeComponets/home-buy/home-buy.component';
import { HomeSellComponent } from './Components/HomeComponets/home-sell/home-sell.component';

import { IntroLoginComponent } from './Components/PaymentComponent/Login/intro-login/intro-login.component';
import { SignInComponent } from './Components/PaymentComponent/Login/sign-in/sign-in.component';
import { SignUpComponent } from './Components/PaymentComponent/Login/sign-up/sign-up.component';
import { PageFavouritesComponent } from './Components/FavouritesComponent/page-favourites/page-favourites.component';
import { CompereComponent } from './Components/CompareComponent/compere/compere.component';
import { CompereItemsComponent } from './Components/CompareComponent/compere-items/compere-items.component';
import { AgencyComponent } from './Components/AgencyComponent/agencyList/agency.component';
import { DealersComponent } from './Components/DealersComponent/dealers-List/dealers.component';
import { AgencyMapComponent } from './Components/AgencyComponent/agency-map/agency-map.component';
import { DealerMapComponent } from './Components/DealersComponent/dealer-map/dealer-map.component';
import { YourProfileComponent } from './Components/PaymentComponent/EditAccount/your-profile/your-profile.component';
import { SearchRuseltFilterComponent } from './Components/HomeComponets/search-ruselt-filter/search-ruselt-filter.component';
import { SplashComponent } from './Components/HomeComponets/splash/splash.component';
import { PageYourCarInfoComponent } from './Components/HomeComponets/yourInformation/page-your-car-info/page-your-car-info.component';
import { PageCarDetailsComponent } from './Components/HomeComponets/carDetails/page-car-details/page-car-details.component';
import { ForgetPasswordConfirmComponent } from './Components/PaymentComponent/Forgetpassword/forget-password-confirm/forget-password-confirm.component';
import { ForgetpasswordComponent } from './Components/PaymentComponent/Forgetpassword/forgetpassword/forgetpassword.component';


export const routes: Routes = [
    { path: '', component: SplashComponent, pathMatch: 'full' },
    { path: 'intro-login', component: IntroLoginComponent },
    { path: 'SignIn', component: SignInComponent },
    { path: 'category', component: HomeCategoryComponent },
    { path: 'Buy'     , component: HomeBuyComponent  },
    { path: 'Sell' , component : HomeSellComponent},
    // { path: 'PopupConfirmationComponentSall' , component : HomeSellPopupConfirmationComponent},
    {path : 'Signup' , component: SignUpComponent},
    {path : 'Favourites' , component: PageFavouritesComponent},
    {path : 'Compere' , component: CompereComponent },
    {path : 'compereitems' , component: CompereItemsComponent},
    {path : 'Listagency' , component: AgencyComponent },
    {path : 'Mapagency' , component: AgencyMapComponent},
    {path : 'Listdelars' , component: DealersComponent },
    {path : 'MapDealers' , component: DealerMapComponent },
    {path : 'YourProfile' , component: YourProfileComponent },
    {path : 'RuseltSearchFilter' , component: SearchRuseltFilterComponent },
    {path : 'carinformation' , component : PageYourCarInfoComponent},
    {path : 'cardetails' , component : PageCarDetailsComponent },
    {path : 'Forget_Password' , component : ForgetpasswordComponent }
];
