import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CardetailService } from 'src/app/services/cardetail.service';
@Component({
  selector: 'app-cardetail-add',
  templateUrl: './cardetail-add.component.html',
  styleUrls: ['./cardetail-add.component.css']
})
export class CardetailAddComponent implements OnInit {
  carAddForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private carDetailService:CardetailService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createCarAddForm();
  }

  createCarAddForm(){
      this.carAddForm=this.formBuilder.group({ 
        description:["",Validators.required],
        modelYear:["",Validators.required],
        colorId:["",Validators.required],
        brandId:["",Validators.required],
        images:["",Validators.required]
      })
  }
  add(){
    if(this.carAddForm.valid){
      let carModel =Object.assign({},this.carAddForm.value) 

      
   }
    else
    { this.toastrService.error("Formunuz Eksik","Dikkat")}
  
  }

}
