
import { Component, OnInit } from '@angular/core';
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
  public count: number = 6;
  public localMenuData: Array<any> = [];
  public currentCategory = 'all';
  public items:items=new items();
  quantity!: number;
  itemId!: number;
  constructor(public apiService: ApiService) {
    console.log('menu');
  }

  ngOnInit(): void {
    this.getData();
  
  }
  //Getting Data and fliter it //
  public getData(): void {
    this.apiService.getJson().subscribe((data) => {
      this.localMenuData = data;
      this.menuData = this.localMenuData.slice(0, 6);
      console.log(data);
      this.localMenuData.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: +a.price });
        console.log(typeof a.total);
      });
    });
  }
  //Method to see category wise array items//
  // public showAll(event: string): void {
  //   this.currentCategory = event;
  //   if (event === 'all') {
  //     this.menuData = this.localMenuData.slice(0, 6);
  //     this.count = 6;
  //   } else {
  //     console.log(event);
  //     this.menuData = this.localMenuData
  //       .filter((x: any) => {
  //         return x.categories === event;
  //       })
  //       .slice(0, 4);
  //   }
  // }
  //Method to see more array items//
  // public seeMore(): void {
  //   this.count = this.count + 3;
  //   if (this.currentCategory === 'all') {
  //     this.menuData = this.localMenuData.slice(0, this.count);
  //     console.log(this.menuData);
  //   } else {
  //     this.menuData = this.localMenuData
  //       .filter((x: any) => x.categories == this.currentCategory)
  //       .slice(0, this.count);
  //   }
  // }

  public addToCart(item: any): void {
    this.items.quantity=item.quantity;
    this.items.name=item.title;
    this.items.price=item.price;
    this.itemId=item.id;
    this.apiService.addToCart(this.items,this.itemId).subscribe(res=>{
      console.log(res)
    });
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

