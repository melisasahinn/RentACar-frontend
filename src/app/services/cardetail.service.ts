import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/cardetail';
import { CarDetailResponseModel } from '../models/cardetailResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {
  apiUrl = "https://localhost:44312/api/"
  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcarsbybrand?brandid=" + brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarByColor(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getbycolor?colorid=" + colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarById(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcardetail?carId=" + carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  add(cardetail:CarDetail):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",cardetail)
}
}