import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';

const routes: Route[] = [
  { path: '', component: ProductsComponent }
];

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
