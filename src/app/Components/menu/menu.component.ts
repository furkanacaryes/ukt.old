import { Component, OnInit } from '@angular/core';

import { AppService } from '../../app.service';

@Component({
  selector: 'ukt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems: Array<{name: string, routerLink: string, sub?: Array<{}>}> = [
    { name: 'Anasayfa',   routerLink: '/' },
    { name: 'Hakkımızda', routerLink: '/hakkimizda' },
    {
      name: 'Servisler',
      routerLink: '/servisler',
      sub: this._appService.services
    },
    { name: 'Ürünler',    routerLink: '/urunler' },
    { name: 'İletişim',   routerLink: '/iletisim' },
  ];

  constructor(private _appService: AppService) { }

  ngOnInit() {
  }

}
