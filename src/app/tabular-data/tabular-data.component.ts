import { HttpErrorResponse } from '@angular/common/http';
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
  details: userObj[] = [];
  bsModalRef?: BsModalRef;
  id!: number;
  editUserId!: number;
  constructor(private apiService: ApiService, private modalService: BsModalService, private dataService: DataService, public router: Router) {

  }


  ngOnInit(): void {

    //this.details=this.dataService.collection
    this.getData();
  }

  private getData() {
    this.apiService.getUsers().subscribe((res) => {
      this.details = res
      //  console.log(this.details)
    })
  }

  public onDelete(value: any) {
    this.id = value.id
    //this.dataService.collection.splice(index,1)
    this.apiService.deleteUser(this.id).subscribe((res) => {
      // console.log(res)
    })

    this.getData();

  }

  public openEditModal(value:any) {
    //this.router.navigate(['editForm/',index])
    this.editUserId=value.id
    const initialState: ModalOptions = {
      initialState: {
        editUserId: this.editUserId,
        title: 'Edit Modal',
        userData: this.details
      }
    };
    this.bsModalRef = this.modalService.show(UserFormComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';

  }
}
