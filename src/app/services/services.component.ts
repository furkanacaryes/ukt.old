import { Component, OnInit, OnDestroy } from '@angular/core';

import { servicesEnterAnimation } from '../Animations/services.enter.animation';
import { servicesTransition } from '../Animations/services.transition';

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

  services = this._appService.services;

  images = [
    '../../assets/acar-carousel/colorcotton.jpg',
    '../../assets/acar-carousel/spool.jpg',
    '../../assets/acar-carousel/colors.jpg'
  ];

  sub: Subscription;

  loadedCount = 0;
  ready = false;

  constructor(private _appService: AppService) { }

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
