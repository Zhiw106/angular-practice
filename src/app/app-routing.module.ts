import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PracticeComponent} from './components/practice/practice.component'
import {BindingComponent} from './components/binding/binding.component'
import {ProductsComponent} from "./components/products/products.component";
import {ProductComponent} from "./components/product/product.component";
import {OutputComponent} from "./components/output/output.component";
import {InputComponent} from "./components/input/input.component";
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';
import { Test4Component } from './components/test4/test4.component';
import { FormComponent } from './components/template-driven-form/form.component';
import { StudentComponent } from './components/student/student.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

const routes: Routes = [
  {path:"practice",component:PracticeComponent},
  {path:"binding",component:BindingComponent},
  {path:"output",component:OutputComponent},//redirect to
  {path:"products",component:ProductsComponent},
  {path:"product/:id",component:ProductComponent},
  {path:"output",component:OutputComponent},
  {path:"input",component:InputComponent},
  {path:'two-way-binding',component:TwoWayDataBindingComponent},
  {path:'test4',component:Test4Component},
  {path:'form',component:FormComponent},
  {path:'student',component:StudentComponent},
  {path:'reactive-form',component:ReactiveFormComponent}
  // {path:"**",component:NotFoundComponent}
  // {path:"room/:id",component:RoomComponent},
  // {path:"hotels",component:HotelsComponent},
  //  {path:"**", redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
