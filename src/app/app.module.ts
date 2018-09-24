import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ItemListComponent } from './item-list/item-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddItemComponent } from './product/add-item/add-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {Routes, RouterModule} from '@angular/router';
import { RegisterComponent } from './User/register/register.component';
import { LoginComponent } from './User/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ItemListComponent,
    AddItemComponent,
    NavigationBarComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: ' ' , component: ItemListComponent},
      {path: 'Home' , component: ItemListComponent},
      {path: 'AddItem', component: AddItemComponent},
      {path: 'Register', component: RegisterComponent},
      {path: 'Login', component: LoginComponent},
      {path: '**', component: ItemListComponent}
    ]),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
