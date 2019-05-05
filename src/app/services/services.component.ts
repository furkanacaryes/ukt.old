import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ukt-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  // Duplicated but not that much to
  // make you create a service.
  // Deal with it.
  services = [
    {
      name: 'Kalite Kontrol Labarotuvarı',
      routerLink: '/servisler/kalite-kontrol-laboratuvari'
    },
    {
      name: 'Uygulama Labarotuvarı',
      routerLink: '/servisler/uygulama-laboratuvari'
    },
    {
      name: 'Teknik Destek',
      routerLink: '/servisler/teknik-destek'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
