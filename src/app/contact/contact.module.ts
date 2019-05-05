import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';
import { environment } from '../../environments/environment';

import { ContactComponent } from './contact.component';

const routes: Route[] = [
  { path: '', component: ContactComponent }
];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({ apiKey: environment.MAPS_API_KEY })
  ]
})
export class ContactModule { }
