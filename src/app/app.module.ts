import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { SearchComponent } from './search/search.component';
import { TodolistComponent } from './todolist/todolist.component';
//import service
import { StorageService } from './services/storage.service';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { BindingComponent } from './binding/binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { PageComponent } from './page/page.component';
import { ClassComponent } from './class/class.component';
import { MessagesComponent } from './messages/messages.component';
import { Test4Component } from './test4/test4.component';
import { FormComponent } from './template-driven-form/form.component';
import { StudentComponent } from './student/student.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    SearchComponent,
    TodolistComponent,
    InputComponent,
    OutputComponent,
    InputOutputComponent,
    BindingComponent,
    TwoWayDataBindingComponent,
    DirectivesComponent,
    ProductsComponent,
    ProductComponent,
    PageComponent,
    ClassComponent,
    MessagesComponent,
    Test4Component,
    FormComponent,
    StudentComponent,
    ReactiveFormComponent,
    AngularMaterialComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [StorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
