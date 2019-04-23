import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ukt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
