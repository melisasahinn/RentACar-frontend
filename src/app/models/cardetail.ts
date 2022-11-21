export interface CarDetail{
    modelName(arg0: string, modelName: any): unknown;
    images:string[]
    carId:number;
    colorId:number;
    brandId:number;
    modelYear:number;
    dailyPrice:number;
    description:string;
    minFindeksScore:number;
}