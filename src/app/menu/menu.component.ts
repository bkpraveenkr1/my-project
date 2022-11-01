
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ApiService } from '../shared/api.service';
import { items } from '../shared/model';
//import { CartService } from '../shared/cart.service';
//import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public menuData: Array<any> = [];
  public localMenuData: Array<any> = [];
  public items:items=new items();
  quantity!: number;
  cartItems:Array<any>=[];
  searchKey:string ="";
  constructor(public apiService: ApiService, public dataService:DataService) {
  }

  ngOnInit(): void {
    this.getData();
  
  }
  //Getting Data and fliter it //
  public getData(): void {
    this.apiService.getJson().subscribe((data) => {
      this.localMenuData = data;
      this.menuData = this.localMenuData.slice(0, 6);
      this.localMenuData.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: +a.price });
      });
    });

    this.dataService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  

  public addToCart(item: any): void {
    // this.items.quantity=item.quantity;
    // this.items.name=item.title;
    // this.items.price=item.price;
    // this.cartItems.push(item)

    // this.apiService.addToCart(this.items).subscribe(res=>{
    //   console.log(res)
    // });
console.log(item)
    this.dataService.addtoCart(item)
  }

  increase(item:any){
    
    item.quantity +=1; //item.quantity=item.quantity+1
  }

  decrease(item:any){
    if(item.quantity!=1){
      item.quantity -=1; 

    }
  }
}

