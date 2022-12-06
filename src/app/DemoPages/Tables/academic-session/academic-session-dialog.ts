import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormBaseComponent } from 'src/app/form-base/form-base.component';
import { AcadmicYear } from 'src/app/Models/academicYearModel';
import { DiscountType } from 'src/app/Models/DiscountTypeModel';
import { GenericServiceService } from 'src/app/Services/generic-service.service';

@Component({
  selector: 'academic-session-dialog',
  templateUrl: './academic-session-dialog.html',
//   styleUrls: ['./dialouge.component.sass']
})
export class AcademicSessionDialog    extends FormBaseComponent<AcadmicYear> implements OnInit {
  

 
  actionBtn: string = 'Save';
  
  page:String
  constructor(
    private formBuilder: FormBuilder,
    private genericService: GenericServiceService,
    private route:Router,
    public dialogRef: MatDialogRef<AcademicSessionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
super();
this.page = data.page;
this.model = new AcadmicYear();
console.log(data);

  }


  ngOnInit(): void {
  
    this.createForm();
    // this.productForm = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   description: ['', Validators.required],
    
    // });
    // if (this.editData) {
    //   this.actionBtn = 'Update';
    //   this.productForm.controls['name'].setValue(
    //     this.editData.name
    //   ),
    //     this.productForm.controls['description'].setValue(this.editData.description);
    //     this.productForm.controls['id'].setValue(this.editData.id);
     
    //     console.log(this.editData);
        
    // }
  }


  createForm() {
    if (this.data.hasOwnProperty("id")) {
        this.form = this.formBuilder.group({
            id: [this.data.id],
            name: [this.data.name, Validators.required],
            description: [this.data.description],
            startDate: [this.data.startDate],
            endDate: [this.data.endDate],
        });
    } 
    else {
        this.form = this.formBuilder.group({
            id: [this.model.id],
            name: [this.model.name, Validators.required],
            description: [this.model.description],
            startDate: [this.model.startDate],
            endDate: [this.model.endDate],
        });
    }
}
startDate


 setValues(): void {
  const data = this.form.getRawValue();
  if (this.data.hasOwnProperty("id")) {
      this.data.id = data.id;
      this.data.name = data.name;
      this.data.description = data.description;
      this.data.startDate = data.startDate;
      this.data.endDate = data.endDate;
  } else {
    this.model.instituteId = 32;
    this.model.current = 1;
      this.model.name = data.name;
      this.model.description = data.description;
      this.model.startDate = data.startDate;
      this.model.endDate = data.endDate;
  }
  
}


closeDiloag(): void {
  this.dialogRef.close();
}

//  saveAction(): void {
//   this.setValues();
//   this.genericService.createDiscount(this.model).subscribe((res)=>{
//     console.log(res);
    
    
//   });
// }

saveAction() {

    this.setValues();
        this.genericService.createAY(this.model).subscribe((res)=>{
          this.closeDiloag();
       
        })
      

           
          
      
        
       
      
    
   
   
  }
  update() {
    console.log(this.data.id);
    

    this.setValues();
        this.genericService.updateDiscount(this.data).subscribe((res)=>{
          this.closeDiloag();
       
        })
      

           
          
      
        
       
      
    
   
   
  }
  // updateProduct() {
   
    
  //   this.genericService.updateDiscount(this.productForm.value, this.editData.id).subscribe({
      
  //     next: (res) => {
  //       alert('Record Updated Successfully');
  //       this.productForm.reset();
  //       this.dialogref.close('update');
  //     },
  //     error: () => {
  //       console.log("-> "+ this.productForm.value);
  //       console.log("-> "+ this.editData.id);
        
  //       alert('Error while updating the record!');
  //     },
  //   });
  // }

}
