import { Component } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import {  City, Gender } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent  {

  myForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    middleName: new FormControl(null, Validators.required),


    lastName: new FormControl(null, Validators.required),

    email: new FormControl(null, Validators.required),

    dob: new FormControl(null, Validators.required),

    gender: new FormControl(null, Validators.required),

    city: new FormControl(null, Validators.required),
    phone: new FormControl(null, Validators.required),

  });
  cities: City[];
  gender: Gender[];
  submitted = false;


  constructor( private router: Router, private dataService: DataService) {
    this.cities = [
      { name: 'New York' },
      { name: 'Rome' },
      { name: 'London' },
      { name: 'Istanbul' },
      { name: 'Paris' }
    ];
    this.gender = [
      { kind: 'Male' },
      { kind: 'Female' }

    ];
  }

  get myFormControl() {
    return this.myForm.controls
  }

  onSubmit() {
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    }
    this.dataService.sendData(this.myForm.value)
    this.router.navigate(['table'])
  }
}

