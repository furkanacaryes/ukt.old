import { Component, OnInit } from '@angular/core';

import { AppService } from '../../app.service';

@Component({
  selector: 'ukt-ulab',
  templateUrl: './ulab.component.html',
  styleUrls: ['./ulab.component.scss']
})
export class ULabComponent implements OnInit {

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this._appService.updateMeta({
      title: 'Uygulama Laboratuvarı',
      description: `
      Çalışma ortamımız içinde mevcut ürünleri için yeni uygulama sahaları geliştirme,
      yeni geliştirilen ürünlerin performansını test etmek ve müşterilerimizin sorunlarına interaktif çözümler bulmaktır.
      `,
      image: '',
      route: 'servisler/uygulama-laboratuvari'
    });
  }

}
