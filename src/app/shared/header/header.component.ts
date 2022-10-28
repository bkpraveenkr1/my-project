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
     // console.log(res)
      this.totalItem=res.length;
    })
  }

}
