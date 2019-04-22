import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'hakkimizda', loadChildren: './about/about.module#AboutModule' },
  { path: 'servisler',  loadChildren: './services/services.module#ServicesModule' },
  { path: 'urunler',    loadChildren: './products/products.module#ProductsModule' },
  { path: 'iletisim',   loadChildren: './contact/contact.module#ContactModule' },
  { path: '',           loadChildren: './home/home.module#HomeModule' },

  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
