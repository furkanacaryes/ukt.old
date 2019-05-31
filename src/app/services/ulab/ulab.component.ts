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
      description: 'Müşterilerimizin istekleri ve sorunlarından yola çıkarak servis hizmetleri veriyoruz.',
      image: '',
      route: 'servisler/uygulama-laboratuvari'
    });
  }

}
