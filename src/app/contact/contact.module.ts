import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';

const routes: Route[] = [
  { path: '', component: ContactComponent }
];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactModule { }
