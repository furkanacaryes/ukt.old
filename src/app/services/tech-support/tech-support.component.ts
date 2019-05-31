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
      description: 'Ürün seçimi ve kullanımı sırasında desteğimiz sizinle.',
      image: '',
      route: 'servisler/teknik-destek'
    });
  }

}
