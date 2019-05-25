import { Component, OnInit } from '@angular/core';

import { AppService } from '../../app.service';

@Component({
  selector: 'ukt-tech-support',
  templateUrl: './tech-support.component.html',
  styleUrls: ['./tech-support.component.scss']
})
export class TechSupportComponent implements OnInit {

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this._appService.updateMeta({
      title: 'Teknik Destek',
      description: `
        Müşterilerimizin ürün seçimi ve kullanımı sırasında,
        karşılaşabilecekleri sorunlarla ilgili olarak,
        ihtiyaç duyulan hizmet desteğini vermekteyiz.
      `,
      image: '',
      route: 'servisler/teknik-destek'
    });
  }

}
