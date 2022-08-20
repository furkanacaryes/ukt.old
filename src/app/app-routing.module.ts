import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'hakkimizda', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'servisler',  loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) },
  { path: 'urunler',    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'iletisim',   loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: '',           loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
