import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule, MatSliderModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';



import { MatTableModule, MatIconModule, MatButtonModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SummaryPipe } from './summary.pipe';
import { TitleCasePipe } from './title-case.pipe'

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MatSliderModule, FormsModule, MatInputModule, BrowserAnimationsModule, MatSelectModule,
    MatTableModule, MatDialogModule, MatButtonModule, MatDatepickerModule, MatIconModule, MatSortModule, MatSnackBarModule,
    MatNativeDateModule, HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
