import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { ModalModule } from 'ngx-bootstrap/modal';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
@NgModule({
  declarations: [
    AppComponent,
    PhoneMaskDirective,
    TabularDataComponent,
    UserFormComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    CartItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    DropdownModule,
    ReactiveFormsModule ,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    ButtonModule,
    TableModule,
    RouterModule,
    HttpClientModule

  ],
  exports: [
    PhoneMaskDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
