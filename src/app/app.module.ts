import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PracticeComponent} from './components/practice/practice.component';
import {SearchComponent} from './components/search/search.component';
import {TodolistComponent} from './components/todolist/todolist.component';
//import service
import {StorageService} from './services/storage.service';
import {InputComponent} from './components/input/input.component';
import {OutputComponent} from './components/output/output.component';
import {InputOutputComponent} from './components/input-output/input-output.component';
import {BindingComponent} from './components/binding/binding.component';
import {TwoWayDataBindingComponent} from './components/two-way-data-binding/two-way-data-binding.component';
import {DirectivesComponent} from './components/directives/directives.component';
import {ProductsComponent} from './components/products/products.component';
import {ProductComponent} from './components/product/product.component';
import { PageComponent } from './components/page/page.component';
import { ClassComponent } from './components/class/class.component';
import { MessagesComponent } from './components/messages/messages.component';
import { Test4Component } from './components/test4/test4.component';
import { FormComponent } from './components/template-driven-form/form.component';
import { StudentComponent } from './components/student/student.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

@NgModule({
  declarations: [AppComponent, PracticeComponent, SearchComponent, TodolistComponent, InputComponent, OutputComponent, InputOutputComponent, BindingComponent, TwoWayDataBindingComponent, DirectivesComponent, ProductsComponent, ProductComponent, PageComponent, ClassComponent, MessagesComponent, Test4Component, FormComponent, StudentComponent, ReactiveFormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,ReactiveFormsModule],
  providers: [StorageService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
