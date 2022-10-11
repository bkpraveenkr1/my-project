import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Details } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
public subject=new Subject<Details>();
  constructor() { }

sendData(data: Details){
  this.subject.next(data)
}

getData():Observable<Details>{
  return this.subject.asObservable();
}
}
