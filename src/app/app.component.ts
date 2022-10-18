import { Component, HostListener, OnInit } from '@angular/core';
import { DataService } from './data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private data: DataService) {}

  // @HostListener("window:beforeunload") unloadHandler() {
  //   sessionStorage.setItem('tableData', JSON.stringify(this.data.collection))
  // }
}
