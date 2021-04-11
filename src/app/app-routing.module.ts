import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbrandComponent } from './components/addbrand/addbrand.component';
import { AddcarComponent } from './components/addcar/addcar.component';
import { AddcolorComponent } from './components/addcolor/addcolor.component';
import { AddrentalComponent } from './components/addrental/addrental.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarComponent } from './components/car/car.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { EditbrandComponent } from './components/editpage/editbrand/editbrand.component';
import { EditcarComponent } from './components/editpage/editcar/editcar.component';
import { EditcolorComponent } from './components/editpage/editcolor/editcolor.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
{path:"", pathMatch:"full", component:CarComponent},
{path:"rentals", pathMatch:"full", component:RentalComponent},
{path:"cars/brands/:brandId", pathMatch:"full", component:CarComponent},
{path:"cars/filter/:brand/:color", pathMatch:"full", component:CarComponent},
{path:"cars/cardetail/:carId", pathMatch:"full", component:CarCardComponent},
{path:"cars/add", pathMatch:"full", component:AddcarComponent},
{path:"brands/add", pathMatch:"full", component:AddbrandComponent},
{path:"colors/add", pathMatch:"full", component:AddcolorComponent},
{path:"brandedit", pathMatch:"full", component:EditbrandComponent},
{path:"coloredit", pathMatch:"full", component:EditcolorComponent},
{path:"caredit/:carId", pathMatch:"full", component:EditcarComponent},
{path:"cars/colors/:colorId", pathMatch:"full", component:CarComponent},
{
  path: 'car/:carId',
  pathMatch: 'full',
  component: CarDetailsComponent,
},
{path: 'rent/:carId',
pathMatch: 'full',
component: AddrentalComponent,},
{path: 'checkout',
pathMatch: 'full',
component: CheckoutComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
