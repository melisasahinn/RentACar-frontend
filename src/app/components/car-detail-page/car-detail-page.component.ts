import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/cardetail';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-car-detail-page',
  templateUrl: './car-detail-page.component.html',
  styleUrls: ['./car-detail-page.component.css']
})
export class CarDetailPageComponent implements OnInit {
  carDetails: CarDetail[];
  currentImage: CarImage;
  imageUrl = "https://localhost:44312"

  constructor(private carDetailService:CardetailService, 
    private carImageService:CarImageService, 
    private activatedRoute:ActivatedRoute, 
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getCarById(params["carId"])
    })
  }

  getCarById(carId:number){
    this.carDetailService.getCarById(carId).subscribe(response => {
      this.carDetails = response.data;
    })
  }

  setCurrentImageClass(image: CarImage) {
    this.currentImage = image;
  }

  getCarImage(carImage:CarImage, carId: number){
    if (carImage.carId == 0) {
      let path = this.imageUrl + "/images/carDefault.png"
      return path;

    }
    else{
      let path = this.imageUrl + carImage.imagePath;
      return path;
    }
  }

}