import { Component, OnInit, OnDestroy } from '@angular/core';

import servicesEnterAnimation from '../Animations/services.enter.animation';

import { AppService } from '../app.service';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ukt-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [servicesEnterAnimation]
})
export class ServicesComponent implements OnInit, OnDestroy {

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

  sub: Subscription;

  // isLoaded = false;
  // ready = false;
  isLoaded = true;
  ready = false;

  constructor( private _appService: AppService ) { }

  ngOnInit() {
    this.sub = this._appService.ui
      .pipe(debounceTime(100))
      .subscribe(state => this.ready = !state.isBusy);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  get isReady() {
    return this.isLoaded && this.ready;
  }

}
