import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public totalItem=0;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getProducts().subscribe((res)=>{
      console.log(res)
      this.totalItem=0;

     for(let i=0;i<res.length;i++){
        this.totalItem=this.totalItem + res[i].quantity;

      //console.log(this.totalItem)
     }
    })
  }

}
