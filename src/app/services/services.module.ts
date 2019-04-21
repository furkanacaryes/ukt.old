import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { ServicesComponent } from './services.component';

const routes: Route[] = [
  { path: '', component: ServicesComponent }
];

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ServicesModule { }
