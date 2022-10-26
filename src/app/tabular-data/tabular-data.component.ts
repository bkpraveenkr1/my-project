import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { DataService } from '../data.service';
import { ApiService } from '../shared/api.service';
import { UserFormComponent } from '../user-form/user-form.component';
import { userObj } from '../user-form/user-form.model';


@Component({
  selector: 'app-tabular-data',
  templateUrl: './tabular-data.component.html',
  styleUrls: ['./tabular-data.component.scss']
})
export class TabularDataComponent implements OnInit {
  //details: Array<userObj> = [];
  details:any=[];
  bsModalRef?: BsModalRef;
  //editUserId!: number;
  //user: any;
  id:any;
  editUserIndex!: number;

  constructor(private apiService: ApiService, private modalService: BsModalService, private dataService: DataService, public router: Router) {
  }


  ngOnInit(): void {
    // this.dataService.cast.subscribe((res:any) => {     
      
    //   this.details.push(res)
    
    // })



    //this.details=this.dataService.collection
   // this.getData();
    this.apiService.getCartItems().subscribe((res:any)=>{
      //console.log(res)
      this.details=res
    })
  }

  // private getData() {
  //   this.apiService.getUsers().subscribe((res) => {
  //     this.details = res
  //   })
  // }

  public onDelete(value: any) {
   this.id = value.id
    //this.dataService.collection.splice(index,1)
    this.apiService.deleteUser(this.id).subscribe((res) => {
    })

    //this.getData();

  }

  public openEditModal(values:any) {
    // this.router.navigate(['editForm/',index])
    // const initialState: ModalOptions = {
    //   initialState: {
    //     editUserIndex: value,
    //     title: 'Edit Modal',
    //      userData: this.details
    //   }
    // };
    // this.bsModalRef = this.modalService.show(UserFormComponent, initialState);
    // this.bsModalRef.content.closeBtnName = 'Close';

  }
  
}
