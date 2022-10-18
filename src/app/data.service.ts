import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Details } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
collection:Array<Details>=[]

  constructor(public http:HttpClient) { 
  //   let data:any=(sessionStorage.getItem('tableData'))
  //  if(data){
  //   this.collection=JSON.parse(data)
  //  } 

  }


}
