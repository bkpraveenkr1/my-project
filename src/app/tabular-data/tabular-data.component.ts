import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Details } from '../user';


@Component({
  selector: 'app-tabular-data',
  templateUrl: './tabular-data.component.html',
  styleUrls: ['./tabular-data.component.scss']
})
export class TabularDataComponent implements OnInit {
  details: Details[]=[];
  constructor(private dataService: DataService, public router:Router) {

  }


  ngOnInit(): void {
    
    this.details=this.dataService.collection
  }

  public onDelete(index:number){
//console.log('delete')
this.dataService.collection.splice(index,1)
  }
 
public onEdit(index:number){
  this.router.navigate(['editForm/',index])
}
}
