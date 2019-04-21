import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

const routes: Route[] = [
  { path: '', component: AboutComponent }
];

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutModule { }
