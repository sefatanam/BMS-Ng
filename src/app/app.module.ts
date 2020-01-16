import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from "@angular/forms";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';



import {MatTableModule, MatIconModule,MatButtonModule} from '@angular/material';
import {MatSortModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { ProductComponent } from './product/product.component';
import { SaleComponent } from './sale/sale.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { CustomerComponent } from './customer/customer.component';
import { MatSliderModule } from '@angular/material/slider';
import { AddCatagoryComponent } from './catagory/add-catagory/add-catagory.component';
import { EditCatagoryComponent } from './catagory/edit-catagory/edit-catagory.component';
import { ShowCatagoryComponent } from './catagory/show-catagory/show-catagory.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { ShowCustomerComponent } from './customer/show-customer/show-customer.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ShowProductComponent } from './product/show-product/show-product.component';
import { AddSaleComponent } from './sale/add-sale/add-sale.component';
import { EditSaleComponent } from './sale/edit-sale/edit-sale.component';
import { ShowSaleComponent } from './sale/show-sale/show-sale.component';
import { AddPurchaseComponent } from './purchase/add-purchase/add-purchase.component';
import { EditPurchaseComponent } from './purchase/edit-purchase/edit-purchase.component';
import { ShowPurchaseComponent } from './purchase/show-purchase/show-purchase.component';

import {CatagoryService} from './services/catagory.service'
import {ProductService} from './services/product.service'
import {SaleService} from './services/sale.service'
import {PurchaseService} from './services/purchase.service'
import {CustomerService} from './services/customer.service'


@NgModule({
  declarations: [
    AppComponent,
    CatagoryComponent,
    ProductComponent,
    SaleComponent,
    PurchaseComponent,
    CustomerComponent,
    AddCatagoryComponent,
    EditCatagoryComponent,
    ShowCatagoryComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    ShowCustomerComponent,
    AddProductComponent,
    EditProductComponent,
    ShowProductComponent,
    AddSaleComponent,
    EditSaleComponent,
    ShowSaleComponent,
    AddPurchaseComponent,
    EditPurchaseComponent,
    ShowPurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatSliderModule,FormsModule,MatInputModule,BrowserAnimationsModule,MatSelectModule,
    MatTableModule,MatDialogModule,MatButtonModule,MatDatepickerModule,MatIconModule,MatSortModule,MatSnackBarModule,
    MatNativeDateModule,HttpClientModule
    
  ],
  providers: [CatagoryService,CustomerService,PurchaseService,ProductService,SaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
