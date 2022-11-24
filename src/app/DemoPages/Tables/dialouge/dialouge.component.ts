import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GenericServiceService } from 'src/app/Services/generic-service.service';

@Component({
  selector: 'app-dialouge',
  templateUrl: './dialouge.component.html',
  styleUrls: ['./dialouge.component.sass']
})
export class DialougeComponent implements OnInit {

  freshnessList = ['Brand New', 'Second Hand', 'Refurnished'];
  productForm!: FormGroup;
  actionBtn: string = 'Save';
  constructor(
    private formBuilder: FormBuilder,
    private genericService: GenericServiceService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogref: MatDialogRef<DialougeComponent>
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    
    });
    if (this.editData) {
      this.actionBtn = 'Update';
      this.productForm.controls['name'].setValue(
        this.editData.name
      ),
        this.productForm.controls['description'].setValue(this.editData.description);
        // this.productForm.controls['freshness'].setValue(
        //   this.editData.freshness
        // ),
        // this.productForm.controls['price'].setValue(this.editData.price),
        // this.productForm.controls['comment'].setValue(this.editData.comment),
        // this.productForm.controls['date'].setValue(this.editData.date);
    }
  }

  addProduct() {
    if (!this.editData) {
      if (this.productForm.valid) {
        this.genericService.createDiscount(this.productForm.value).subscribe({
          next: (res) => {
            alert('product added successfully');
            this.productForm.reset();
            this.dialogref.close('save');
          },
          error: () => {
            alert('Error while adding the product');
          },
        });
      }
    }
    else {
      this.updateProduct();
    }
    // console.log(this.productForm.value);
  }
  updateProduct() {
   
    
    this.genericService.updateDiscount(this.productForm.value, this.editData.id).subscribe({
      next: (res) => {
        alert('Record Updated Successfully');
        this.productForm.reset();
        this.dialogref.close('update');
      },
      error: () => {
        console.log("-> "+ this.productForm.value);
        console.log("-> "+ this.editData.id);
        
        alert('Error while updating the record!');
      },
    });
  }

}
