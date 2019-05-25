import { Component, OnInit } from '@angular/core';

import { AppService } from '../../app.service';

@Component({
  selector: 'ukt-kklab',
  templateUrl: './kklab.component.html',
  styleUrls: ['./kklab.component.scss']
})
export class KKLabComponent implements OnInit {

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this._appService.updateMeta({
      title: 'Kalite Kontrol Labarotuvarı',
      description: 'Kalite kontrol işlemleri, birinci kalite pazarlanabilir mal üretmek için gereklidir.',
      image: '',
      route: 'servisler/kalite-kontrol-laboratuvari'
    });
  }

}
