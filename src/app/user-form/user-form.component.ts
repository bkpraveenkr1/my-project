import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { DataService } from '../data.service';
import { City, Gender } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
edit:boolean=false;

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
  userId!: number;

  constructor(public fb: FormBuilder, private dataService: DataService, private route: ActivatedRoute, private router: Router) {

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

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['index'];
    if(this.userId){
      this.edit=true;
      for (let i = 0; i <= this.dataService.collection.length; i++) {
        if (this.userId == i) {
          this.myForm = this.fb.group({
            firstName: [this.dataService.collection[i].firstName],
            middleName: [this.dataService.collection[i].middleName],
            lastName: [this.dataService.collection[i].lastName],
            email: [this.dataService.collection[i].email],
            dob: [new Date(this.dataService.collection[i].dob) ],
            city: [this.dataService.collection[i].city],
            gender: [this.dataService.collection[i].gender],
            phone: [this.dataService.collection[i].phone],
  
          })
          console.log(this.myForm.value)
        }
      }
    }
    //console.log(this.userId)
 
  }

  get myFormControl() {
    return this.myForm.controls
  }

  onSubmit() {
    console.log('onSubmit')
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    }
    this.dataService.collection.push(this.myForm.value)
    //console.log(this.dataService.collection)
    this.router.navigate(['table'])
  }

  onUpdate(){
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    }
    this.dataService.collection[this.userId]=this.myForm.value
    // this.dataService.collection.splice(this.userId,1,this.myForm.value)
    //console.log(this.dataService.collection)
    this.router.navigate(['table'])
  }
}

