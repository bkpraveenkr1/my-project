import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { TabularDataComponent } from './tabular-data/tabular-data.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {path:'',component:MenuComponent},
  {path:'table',component:TabularDataComponent},
  {path:'menu',component:MenuComponent},
  {path:'form',component:UserFormComponent},
  {path:'cart',component:TabularDataComponent},



   //{path:'editForm/:index',component:UserFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
