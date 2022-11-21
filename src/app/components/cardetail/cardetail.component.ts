import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/cardetail';
import { ToastrService } from 'ngx-toastr';
import { CarDetailResponseModel } from 'src/app/models/cardetailResponseModel';
import { CardetailService } from 'src/app/services/cardetail.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {
  carDetails: CarDetail[] = [];
  dataLoaded = false;
  imageUrl = "https://localhost:44312"
  currentCar:CarDetail | undefined
  filterText ="";


  constructor(private carDetailService:CardetailService, private activatedRoute:ActivatedRoute, 
    private toastrService:ToastrService,
    private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"] ){
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getCarDetails();
      }
    });
  }
  addToCart(car:CarDetail){
    if(car.carId==1){
      this.toastrService.error("hata","bu ürün sepete eklenemez.")
    }
    else{
      this.toastrService.success("sepete eklendi",car.description)
      this.cartService.addToCart(car)

    }
  }
  getCarDetails(){
      this.carDetailService.getCarDetails().subscribe(response => {
        this.carDetails = response.data;
        console.log(response.data)
        this.dataLoaded = true;
        
      })
  }

  getCarsByBrand(brandId:number){
    this.carDetailService.getCarByBrand(brandId).subscribe(response => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    })
  }

  getCarsByColor(colorId:number) {
    this.carDetailService.getCarByColor(colorId).subscribe(response => {
      console.log(response.data)
      this.carDetails = response.data;
      this.dataLoaded = true;
    })
  }

  setCurrentCarDetail(carId:number){
    this.carDetailService.getCarById(carId).subscribe(response=>{

    })
    // this.toastrService.success( "Detayı Getirildi.", car.description);
    // this.currentCar = car;
  }

  getCarImage(carDetail:CarDetail){
      if (carDetail.images == null) {
        let path = this.imageUrl + "/images/carDefault.png"
        return path;

      }
      else{
        let path = this.imageUrl + carDetail.images;
        return path;
      }

      
  }

 

 
}