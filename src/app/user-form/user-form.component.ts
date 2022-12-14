import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DataService } from '../data.service';
import { ApiService } from '../shared/api.service';
import { City, Details, Gender } from '../user';
import { userObj } from './user-form.model';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  regForm!: FormGroup;
  submitted = false;
  userDetails: any = [];

  constructor(private data: DataService, private fb: FormBuilder) { }

  // @HostListener("window:beforeunload") unloadHandler() {
  //   sessionStorage.setItem('tableData', JSON.stringify(this.data.collection))
  // }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      firstName: ['',Validators.required],
      middleName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      gender: ['',Validators.required],
      city: ['',Validators.required],
      mobile: ['',[Validators.required,Validators.pattern('[6-9]\\d{9}')]],
      dob: ['',Validators.required],
    })
  }

  get regFormControl(){
    return this.regForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    //this.userDetails.push(this.regForm.value);
  }
// edit:boolean=false;
// title?: string;
//editUserId!:number;
// editUserIndex!: number;
// closeBtnName?: string;
// list: any[] = [];
// cities: City[];
// gender: Gender[];
// submitted = false;
// userObj:userObj=new userObj();
// userData:any;
//userIndex!: number;

  // myForm: FormGroup = new FormGroup({
  //   firstName: new FormControl(null, Validators.required),
  //   middleName: new FormControl(null, Validators.required),


  //   lastName: new FormControl(null, Validators.required),

  //   email: new FormControl(null, Validators.required),

  //   dob: new FormControl(null, Validators.required),

  //   gender: new FormControl(null, Validators.required),

  //   city: new FormControl(null, Validators.required),
  //   phone: new FormControl(null, Validators.required),

  // });
 
  // constructor(private data:DataService, private apiService:ApiService, public bsModalRef: BsModalRef,public fb: FormBuilder,  private route: ActivatedRoute, private router: Router) {

  //   this.cities = [
  //     { name: 'New York' },
  //     { name: 'Rome' },
  //     { name: 'London' },
  //     { name: 'Istanbul' },
  //     { name: 'Paris' }
  //   ];
  //   this.gender = [
  //     { kind: 'Male' },
  //     { kind: 'Female' }

  //   ];
  // }

  // ngOnInit(): void {
    // this.apiService.getUsers().subscribe(res=>{
    //   this.userData=res
    // })
    // this.userIndex = this.route.snapshot.params['index'];

  //  if(this.editUserIndex){
  //   this.editForm();
  //  }
  }

  // editForm(){
  //     this.edit=true;
  //     for (let i = 0; i <= this.userData.length; i++) {
  //       if (this.editUserId == this.userData[i]?.id) {
  //         this.myForm = this.fb.group({
  //           firstName: [this.userData[i].firstName],
  //           middleName: [this.userData[i].middleName],
  //           lastName: [this.userData[i].lastName],
  //           email: [this.userData[i].email],
  //           dob: [new Date(this.userData[i].dob) ],
  //           city: [this.userData[i].city],
  //           gender: [this.userData[i].gender],
  //           phone: [this.userData[i].phone],
  
  //         })
  //       }
  //     }
   
  // }

  // get myFormControl() {
  //   return this.myForm.controls
  // }

  // onSubmit() {
  //   this.submitted = true;
  //   if (this.myForm.invalid) {
  //     return;
  //   }
    //this.dataService.collection.push(this.myForm.value)

    // this.userObj.firstName=this.myForm.value.firstName
    // this.userObj.middleName=this.myForm.value.middleName
    // this.userObj.lastName=this.myForm.value.lastName
    // this.userObj.email=this.myForm.value.email
    // this.userObj.gender=this.myForm.value.gender
    // this.userObj.city=this.myForm.value.city
    // this.userObj.dob=this.myForm.value.dob
    // this.userObj.phone=this.myForm.value.phone

    // this.apiService.postUser(this.userObj).subscribe((res:any)=>{
    // }
    // )
   // this.data.sendData(this.myForm.value)
  //   this.data.collection.next(this.userObj)
  //   this.router.navigate(['table'])

  // }

  // onUpdate(){
  //  // console.log(this.editUserId)
  //   this.submitted = true;
  //   if (this.myForm.invalid) {
  //     return;
  //   }

    // this.dataService.collection[this.Index]=this.myForm.value
    
    // this.userObj.firstName=this.myForm.value.firstName
    // this.userObj.middleName=this.myForm.value.middleName
    // this.userObj.lastName=this.myForm.value.lastName
    // this.userObj.email=this.myForm.value.email
    // this.userObj.gender=this.myForm.value.gender
    // this.userObj.city=this.myForm.value.city
    // this.userObj.dob=this.myForm.value.dob
    // this.userObj.phone=this.myForm.value.phone
    // this.apiService.updateUser(this.userObj,this.editUserId).subscribe((res)=>{
    // })
    // this.router.navigate(['table'])
    // this.bsModalRef.hide();
  //}
//}

