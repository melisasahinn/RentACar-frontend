import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
@Injectable({
    providedIn: 'root',
  })
  export class BrandService {
    apiUrl = "https://localhost:44312/api/brands/getall"

    constructor(private httpClient: HttpClient) { }
    getBrands():Observable<ListResponseModel<Brand>>{
      return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
    }
  
  
    // apiUrl = 'https://localhost:44312/api/';
    // constructor(private httpClient: HttpClient) {}
    // getBrands(): Observable<ListResponseModel<Brand>> {
    //   let newPath=this.apiUrl+"brands/getall"
    //   return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
    // }

    // getBrandsByCategory(categoryId:number): Observable<ListResponseModel<Brand>> {
    //   let newPath=this.apiUrl+"cars/getcarsbybrand?brandId="
    //   return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
    // }
  }