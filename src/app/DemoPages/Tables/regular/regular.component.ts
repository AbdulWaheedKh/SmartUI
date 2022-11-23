import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArrayName, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DiscountType } from 'src/app/Models/DiscountTypeModel';
import { GenericServiceService } from 'src/app/Services/generic-service.service';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

@Component({
  selector: 'app-regular',
  templateUrl: './regular.component.html',
  styles: []
})
export class RegularComponent implements OnInit {
  myForm:FormGroup;
  heading = 'Regular Tables';
  subheading = 'Tables are the backbone of almost all web applications.';
  icon = 'pe-7s-drawer icon-gradient bg-happy-itmeo';
  discount: DiscountType = new DiscountType();
  discountTypeList: DiscountType[]

  constructor(private fb:FormBuilder, private genericService: GenericServiceService,private modalService: NgbModal, private router: Router) {
  }

  // @ViewChild('content') addview !: ElementRef

  countries = COUNTRIES;



  ngOnInit() {


    this.myForm = this.fb.group({
      name: [''],
      description: ['']
     
    } );
    this.getDiscountUsers()
  }

  openEdit(targetModal, discount: DiscountType) {
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
    this.myForm.patchValue( {
  
      name: discount.name,
      description: discount.description,
    
    });
  }



  getDiscountUsers() {
    this.genericService.get().subscribe((res) => {
      this.discountTypeList = res;
      console.log(this.discountTypeList);

    })
  }

  openLarge(content) {
    this.modalService.open(content, {
      size: 'lg'
    });
  }
  // openLargeEdit(content , discount:DiscountType) {
  //   this.modalService.open(content, {
  //     size: 'lg'
  //   });
  //   document.getElementById('name').setAttribute('value', discount.name);
  //   document.getElementById('desc').setAttribute('value', discount.description);
  // }
  openLargeEdit(discount:DiscountType){
    this.modalService.open(discount ,{
      size: 'lg'
    } ),
    this.myForm.patchValue( {
  
      name: discount.name,
      description: discount.description,
    
    });
    console.log(discount.name)
  }

  deleteActions(discount: DiscountType): void {

    this.genericService.deleteObject(discount.id).then(() => {


    });;
  }


  editActions(discount: DiscountType): void {
console.log(discount.id);

    //this.genericService.deleteObject(discount.id).then(() => {


   // });;
  }



  AddDiscountType() {
    this.genericService.createDiscount(this.myForm.value).subscribe(data => {
      console.log(data);
      this.myForm.reset();
      // this.modalService.dismissAll();
      this.getDiscountUsers();
    },
      error => console.log(error));
  }

  // });

  // }
  //   deleteActions(id:number){
  // console.log(id);

  //   }

}
