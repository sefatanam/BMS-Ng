
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {

  MatSliderModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatListModule,
  MatGridListModule,
  MatDividerModule,
  MatChipsModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import {
  MatTableModule,
  MatIconModule,
  MatButtonModule,
} from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SummaryPipe } from './summary.pipe';
import { TitleCasePipe } from './title-case.pipe';
import { InputFieldComponent } from './input/input-field/input-field.component';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { SdropdownComponent } from './primeNg/sdropdown/sdropdown.component';

import { MemberService } from './services/member.service';
// PrimeNG
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { PtableComponent } from './primeNg/ptable/ptable.component';
import { FileFormComponent } from './file-form/file-form.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './services/posts.service';
import { AppErrorHandler } from 'src/common/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { PdropdpwnComponent } from './primeNG/pdropdpwn/pdropdpwn.component';
import { MdropdownComponent } from './input/mdropdown/mdropdown.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { Routes, RouterModule } from '@angular/router';
import { InputDatetimeComponent } from './input/input-datetime/input-datetime.component';
import { InputDropdownComponent } from './input/input-dropdown/input-dropdown.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatResponsiveTableComponent } from './material/mat-responsive-table/mat-responsive-table.component';
import { MasterComponent } from './masterDetail/master/master.component';
import { ReusPtableComponent } from './primeNG/reus-ptable/reus-ptable.component';
import { ShortTextPipe } from './short-text.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    TitleCasePipe,
    InputFieldComponent,
    DemoFormComponent,
    SdropdownComponent,
    PtableComponent,
    FileFormComponent,
    PostsComponent,
    GithubFollowersComponent,
    ImageUploadComponent,
    PdropdpwnComponent,
    MdropdownComponent,
    NavMenuComponent,
    InputDatetimeComponent,
    InputDropdownComponent,
    MatResponsiveTableComponent,
    MasterComponent,
    ReusPtableComponent,
    ShortTextPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,

    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatSortModule,
    MatSnackBarModule,
    MatNativeDateModule,
    HttpClientModule,
    ReactiveFormsModule,
    DropdownModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,

    FormsModule,
    MatAutocompleteModule,
    NgxSkeletonLoaderModule,
    // RouterModule.forRoot(routes, { enableTracing: true }),
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,

    MatToolbarModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    FlexLayoutModule,
    MatChipsModule,
    ConfirmDialogModule,



  ],
  providers: [
    MemberService,
    PostsService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler }],
  bootstrap: [AppComponent],
  entryComponents: [MdropdownComponent]
})
export class AppModule { }
