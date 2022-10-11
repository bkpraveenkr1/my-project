import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {  ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {ButtonModule} from 'primeng/button';
import { PhoneMaskDirective } from './phone-mask.directive';
import { TabularDataComponent } from './tabular-data/tabular-data.component';
import {TableModule} from 'primeng/table';
import { UserFormComponent } from './user-form/user-form.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    PhoneMaskDirective,
    TabularDataComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    DropdownModule,
    ReactiveFormsModule ,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ButtonModule,
    TableModule,
    RouterModule 

  ],
  exports: [
    PhoneMaskDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
