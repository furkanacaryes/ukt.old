import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { AcarUiModule } from 'acar-ui';
import { HomeComponent } from './home.component';

const routes: Route[] = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AcarUiModule
  ]
})
export class HomeModule { }
