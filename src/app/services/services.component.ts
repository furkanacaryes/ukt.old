import { Component, OnInit, OnDestroy } from '@angular/core';

import servicesEnterAnimation from '../Animations/services.enter.animation';
import servicesTransition from '../Animations/services.transition';

import { AppService } from '../app.service';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ukt-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [
    servicesEnterAnimation,
    servicesTransition
  ]
})
export class ServicesComponent implements OnInit, OnDestroy {

  // Duplicated but not that much to
  // make you create a service.
  // Deal with it.
  services = [
    {
      name: 'Kalite Kontrol Labarotuvarı',
      routerLink: '/servisler/kalite-kontrol-laboratuvari',
      component: 'KKLabComponent'
    },
    {
      name: 'Uygulama Labarotuvarı',
      routerLink: '/servisler/uygulama-laboratuvari',
      component: 'ULabComponent'
    },
    {
      name: 'Teknik Destek',
      routerLink: '/servisler/teknik-destek',
      component: 'TechSupportComponent'
    }
  ];

  images = [
    '../../assets/acar-carousel/colorcotton.jpg',
    '../../assets/acar-carousel/fabrics.jpg',
    '../../assets/acar-carousel/colors.jpg'
  ];

  sub: Subscription;

  loadedCount = 0;
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

  get isLoaded() {
    return this.images.length === this.loadedCount;
  }

  imageLoaded() {
    this.loadedCount += 1;
  }

}
