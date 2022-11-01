import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable, Subject } from 'rxjs';
import { Details } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
//collection:Array<Details>=[];
//public collection=new Subject();
//cast=this.collection.asObservable();


  //constructor(public http:HttpClient) { 
  //   let data:any=(sessionStorage.getItem('tableData'))
  //  if(data){
  //   this.collection=JSON.parse(data)
  //  } 

  //}

// sendData(data:any){
//   return this.collection.next(data)
// }

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    //this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(item : any){
    this.cartItemList.push(item);
    this.productList.next(this.cartItemList);
   this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += (a.quantity*a.price);
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }


}
