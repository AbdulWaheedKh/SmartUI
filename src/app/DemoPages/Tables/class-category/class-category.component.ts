import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GenericServiceService } from 'src/app/Services/generic-service.service';
import { ClassCategoryDialog } from './class-category-dialog';

@Component({
  selector: 'app-class-category',
  templateUrl: './class-category.component.html',
  // styleUrls: ['./class-category.component.sass']
})
export class ClassCategoryComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description' ,'modifiedDate', 'action' ];
  dataSource!: MatTableDataSource<any>;
  page:String
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog,private fb: FormBuilder, private genericService: GenericServiceService, private modalService: NgbModal, private router: Router) { }
 
 
  ngOnInit(): void {
    this. getAllClassCategory();
  }

  openDialog(): void {
    this.dialog.open(ClassCategoryDialog, {
   
      data: { 
       page: this.page,
       
   
        }
       
    }).afterClosed().subscribe(val=>{
  
      this. getAllClassCategory();
          
         });
 
  }




  EditopenDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(ClassCategoryDialog, {
      data:obj
    });
    console.log(obj);
    

  }


  deleteProduct(id:number){
    this.genericService.deleteClassCategory(id)
    .subscribe({
      next:(res)=>{
        alert('Record deleted Successfully')
        this.getAllClassCategory();
      },
      error:()=>{
    alert('Something went wrong while deleting record')
      }
    })
       }

  editProduct(row:any){
    this.dialog.open(ClassCategoryDialog , {
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllClassCategory();
      }
    })
  }


  getAllClassCategory(){
    this.genericService.getAllClassCategory().subscribe({
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
