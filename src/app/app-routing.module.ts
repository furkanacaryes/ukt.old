import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'hakkimizda', loadChildren: 'app/about/about.module#AboutModule' },
  { path: 'servisler',  loadChildren: 'app/services/services.module#ServicesModule' },
  { path: 'urunler',    loadChildren: 'app/products/products.module#ProductsModule' },
  { path: 'iletisim',   loadChildren: 'app/contact/contact.module#ContactModule' },
  { path: '',           loadChildren: 'app/home/home.module#HomeModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
