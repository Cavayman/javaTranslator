import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContentComponent} from './contents/home/content.component';
import {LearnMainComponent} from './contents/learn-main/learn-main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',component:ContentComponent},
  {path: 'home',component:ContentComponent},
  {path: 'learn',component:LearnMainComponent}

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
