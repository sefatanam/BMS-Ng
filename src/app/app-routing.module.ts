import { ReusPtableComponent } from './primeNG/reus-ptable/reus-ptable.component';
import { MasterComponent } from './masterDetail/master/master.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatResponsiveTableComponent } from './material/mat-responsive-table/mat-responsive-table.component';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { PtableComponent } from './primeNg/ptable/ptable.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';


// const routes: Routes = [];
const routes: Routes = [
  { path: 'materialTable', component: MatResponsiveTableComponent },
  { path: 'form', component: DemoFormComponent },
  { path: 'table', component: PtableComponent },
  { path: 'image', component: ImageUploadComponent },
  { path: 'masterDetail', component: MasterComponent },
  { path: 'usableTable', component: ReusPtableComponent },
  { path: '', component: GithubFollowersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
