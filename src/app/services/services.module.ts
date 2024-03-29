import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { ServicesComponent } from './services.component';
import { ULabComponent } from './ulab/ulab.component';
import { KKLabComponent } from './kklab/kklab.component';
import { TechSupportComponent } from './tech-support/tech-support.component';

const routes: Route[] = [
  {
    path: '',
    component: ServicesComponent,
    children: [
      {
        path: '',
        redirectTo: 'uygulama-laboratuvari'
      },
      {
        path: 'uygulama-laboratuvari',
        component: ULabComponent
      },
      {
        path: 'kalite-kontrol-laboratuvari',
        component: KKLabComponent
      },
      {
        path: 'teknik-destek',
        component: TechSupportComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    ServicesComponent,
    ULabComponent,
    KKLabComponent,
    TechSupportComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ServicesModule { }
