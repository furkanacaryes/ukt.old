import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';

import { environment } from '../../environments/environment';

import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { SharedModule } from '../shared.module';

const routes: Route[] = [
  { path: '', component: ContactComponent }
];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.MAPS_API_KEY
    }),
    AgmDirectionModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class ContactModule { }
