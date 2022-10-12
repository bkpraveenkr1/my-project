import { Injectable } from '@angular/core';
import { Details } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
collection:Array<Details>=[]

  constructor() { 
    let data:any=(localStorage.getItem('tableData'))
   if(data){
    this.collection=JSON.parse(data)
   } 
  }


}
