import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable, Subject } from 'rxjs';
import { Details } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
//collection:Array<Details>=[];
public collection=new Subject();
cast=this.collection.asObservable();


  constructor(public http:HttpClient) { 
  //   let data:any=(sessionStorage.getItem('tableData'))
  //  if(data){
  //   this.collection=JSON.parse(data)
  //  } 

  }

sendData(data:any){
  return this.collection.next(data)
}


}
