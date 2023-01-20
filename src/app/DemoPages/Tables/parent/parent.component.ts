import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Parent } from 'src/app/Models/parentModel';
import { GenericServiceService } from 'src/app/Services/generic-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass']
})
export class ParentComponent implements OnInit {
  registerForm: FormGroup;
    submitted = false;
    model = new Parent();
  constructor(
    private formBuilder: FormBuilder,
    private genericService: GenericServiceService,
    // private matSnackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      phoneNoPersonal: [''],
      EmergencyNumber: [''],
      city: [''],
      postCode: [''],
      homeAddress:[''],
    })
  }




  //   createForm() {
//     this.registerForm = this.formBuilder.group({
       
//         firstName: [this.model.occupation],
//         lastName: ['', Validators.required],
     
//         phoneNoPersonal: ['', Validators.compose([
//             Validators.required])],
        
          
//         EmergencyNumber: ['', Validators.compose([
//             Validators.required,
        
//         ])],
      
//         city: ['', Validators.required],
//         postCode: ['', Validators.required],
    
//         homeAddress: ['', Validators.required],
      
        
       
//     },
     
//         );
// }



//  setValues(): void {

//   const data = this.registerForm.getRawValue();
// console.log(data);

// this.model.profile.firstName = data.firstName;
//   this.model.profile.lastName = data.lastName;

//   this.model.profile.phoneNoPersonal = data.phoneNoPersonal;
//   this.model.profile.emergencyContactNumber = data.EmergencyNumber

//   this.model.profile.city = data.city,
//   this.model.profile.postCode = data.postCode,

//   this.model.profile.homeAddress = data.homeAddress;
  
  

// }



  // saveAction() {

  //   this.setValues();
  //       this.genericService.createParent(this.model).subscribe((res)=>{
         
       
  //       })
      

  //  }   
}
