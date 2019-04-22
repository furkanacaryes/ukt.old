import { Component } from '@angular/core';

@Component({
  selector: 'ukt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuItems: Array<{name: string, routerLink: string, sub?: Array<{}>}> = [
    { name: 'Anasayfa',   routerLink: '/' },
    { name: 'Hakkımızda', routerLink: '/hakkimizda' },
    { name: 'Servisler',  routerLink: '/servisler', sub: [
      { name: 'Aa', routerLink: '/servisler/a' },
      { name: 'Bb', routerLink: '/servisler/b' },
      { name: 'Cc', routerLink: '/servisler/c' }
    ]},
    { name: 'Ürünler',    routerLink: '/urunler' },
    { name: 'İletişim',   routerLink: '/iletisim' },
  ];
}
