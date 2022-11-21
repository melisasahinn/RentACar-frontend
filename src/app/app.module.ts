import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { BrandComponent } from './components/brand/brand.component';
import { NaviComponent } from './components/navi/navi.component';
import { ColorComponent } from './components/color/color.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { RentalComponent } from './components/rental/rental.component';
import { ToastrModule } from 'ngx-toastr'
import { RouterModule } from '@angular/router';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import{BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CardetailAddComponent } from './components/cardetail-add/cardetail-add.component';
import { CarDetailPageComponent } from './components/car-detail-page/car-detail-page.component'
@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    NaviComponent,
    ColorComponent,
    CardetailComponent,
    RentalComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    CardetailAddComponent,
    CarDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
