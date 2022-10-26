import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
}
