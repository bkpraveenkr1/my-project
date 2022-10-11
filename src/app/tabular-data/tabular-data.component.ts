import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { PhoneMaskDirective } from '../phone-mask.directive';
import { Details } from '../user';


@Component({
  selector: 'app-tabular-data',
  templateUrl: './tabular-data.component.html',
  styleUrls: ['./tabular-data.component.scss']
})
export class TabularDataComponent implements OnInit {
  details:Details[]=[];
  constructor(private dataService: DataService) {

  }


  ngOnInit(): void {
    this.dataService.subject.subscribe((res:Details) => {
      this.details.push(res) ;
      console.log(this.details)
    }

    )
  }

  
 

}
