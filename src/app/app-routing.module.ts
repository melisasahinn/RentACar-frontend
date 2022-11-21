import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailPageComponent } from './components/car-detail-page/car-detail-page.component';
import { CardetailAddComponent } from './components/cardetail-add/cardetail-add.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';

const routes: Routes = [
  { path:"",pathMatch:"full",component:CardetailComponent},
  {path:"cardetail",component:CardetailComponent},
  {path:"cars/brand/:brandId",component:CardetailComponent},
  {path:"cars/color/:colorId",component:CardetailComponent},
  {path:"cardetail/add",component:CardetailAddComponent},
  {path:"cars/detail/:carId", component:CarDetailPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
