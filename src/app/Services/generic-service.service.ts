import { ObservableStore } from '@angular-redux/store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DiscountType } from '../Models/DiscountTypeModel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GenericServiceService {

  constructor(private http:HttpClient) { 

  }

  get() {
    return this.http.get<DiscountType[]>('http://localhost:8080/smartSchool/institute/32/dicountTypes')

  }

  // deleteObject(id: number): Promise<DiscountType> {
  //   return new Promise((resolve, reject) => {
  //     this.http.delete<any>('http://localhost:8080/smartSchool/discountTypesController/' + id)
  //       .subscribe(
  //         response => {
  //      //     this.getObjectList();
  //           resolve(response);
  //         },
  //         err => {
  //           reject(err);
  //         });
  //   });
  // }

  deleteObject(id:number){
    return this.http.delete<any>('http://localhost:8080/smartSchool/discountTypesController/' + id)
  }

  createDiscount(discount: DiscountType):Observable<any>{
    return this.http.post('http://localhost:8080/smartSchool/discountTypesController/', discount);
  }

  // updateDiscount(discount: DiscountType):Observable<any>{
  //   return this.http.put('http://localhost:8080/smartSchool/discountTypesController/', discount);
  // }

  updateDiscount(data:DiscountType):Observable<any>{
    console.log(data.id);
    
    return this.http.put<DiscountType>('http://localhost:8080/smartSchool/discountTypesController/updateDiscountType/' , data)
  }




}
