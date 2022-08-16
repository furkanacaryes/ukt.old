import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

// import { AcarUiModule } from 'acar-ui';
import { HomeComponent } from './home.component';

import { SharedModule } from '../shared.module';

const routes: Route[] = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // AcarUiModule,
    SharedModule
  ]
})
export class HomeModule { }
