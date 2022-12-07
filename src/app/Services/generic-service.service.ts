import { ObservableStore } from '@angular-redux/store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DiscountType } from '../Models/DiscountTypeModel';
import { Observable } from 'rxjs';
import { AppConstants } from '../Utility/AppConstants';
import { AcadmicYear } from '../Models/academicYearModel';
import { classCtegory } from '../Models/classCategoryModel';


@Injectable({
  providedIn: 'root'
})
export class GenericServiceService {

  constructor(private http:HttpClient) {  }

  
  /*******  CRUD DISCOUNT TYPE *************
   *******  11-30-2022        **************/

  getAllDiscount() {
    return this.http.get<DiscountType[]>(AppConstants.GET_DISCOUNT_ALL)
  }
  createDiscount(discount: DiscountType):Observable<any>{
    return this.http.post(AppConstants.CREATE_DISCOUNT, discount);
  }
  updateDiscount(data:DiscountType):Observable<any>{
    return this.http.put<DiscountType>(AppConstants.UPDATE_DISCOUNT_BY_ID , data)
  }
  deleteObject(id:number){
    return this.http.delete<any>(AppConstants.DEL_DISCOUNT_BY_ID + id)
  }

 /*******  CRUD DISCOUNT TYPE END  **************/

 /*******  CRUD  AY  11-30-2022  **************/

  getAllAY() {
    return this.http.get<AcadmicYear[]>(AppConstants.GET_AY_ALL)
  }
  createAY(academicYear: AcadmicYear):Observable<any>{
    return this.http.post(AppConstants.CREATE_AY, academicYear);
  }
  updateAY(academicYear:AcadmicYear):Observable<any>{
    return this.http.put<AcadmicYear>(AppConstants.UPDATE_AY_BY_ID , academicYear)
  }
  deleteAY(id:number){
    return this.http.delete<any>(AppConstants.DEL_AY_BY_ID + id)
  }

 
 /*******  END  AY **************/


 getAllClassCategory() {
  return this.http.get<classCtegory[]>(AppConstants.GET_ClassCategory_ALL)
}
createClassCategory(classCtegory: classCtegory):Observable<any>{
  return this.http.post(AppConstants.CREATE_ClassCategory, classCtegory);
}
updateClassCategory(classCtegory:classCtegory):Observable<any>{
  return this.http.put<AcadmicYear>(AppConstants.UPDATE_ClassCategory_BY_ID , classCtegory)
}
deleteClassCategory(id:number){
  return this.http.delete<any>(AppConstants.DEL_ClassCategory_BY_ID + id)
}


/*******  END  AY **************/




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





}
