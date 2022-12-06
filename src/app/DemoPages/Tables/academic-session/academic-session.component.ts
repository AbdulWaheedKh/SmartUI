import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GenericServiceService } from 'src/app/Services/generic-service.service';
import { AcademicSessionDialog } from './academic-session-dialog';

@Component({
  selector: 'app-academic-session',
  templateUrl: './academic-session.component.html',

})
export class AcademicSessionComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description','startDate' ,'endDate' ,'modifiedDate', 'action' ];
  dataSource!: MatTableDataSource<any>;
  page:String
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog,private fb: FormBuilder, private genericService: GenericServiceService, private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {

    this.getAllAcademicyear();
  }

  openDialog(): void {
    this.dialog.open(AcademicSessionDialog, {
   
      data: { 
       page: this.page,
       
   
        }
       
    }).afterClosed().subscribe(val=>{
  
             this.getAllAcademicyear();
          
         });
 
  }

  EditopenDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(AcademicSessionDialog, {
      data:obj
    });
    console.log(obj);
    

  }

  deleteProduct(id:number){
    this.genericService.deleteAY(id)
    .subscribe({
      next:(res)=>{
        alert('Record deleted Successfully')
        this.getAllAcademicyear();
      },
      error:()=>{
    alert('Something went wrong while deleting record')
      }
    })
       }


  editProduct(row:any){
    this.dialog.open(AcademicSessionDialog , {
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllAcademicyear();
      }
    })
  }


  getAllAcademicyear(){
    this.genericService.getAllAY().subscribe({
      next : (res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(res);
        
      },
      error :()=>{
        console.log('Something wrong');
        
      }
    })
       } 


       applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }

}
