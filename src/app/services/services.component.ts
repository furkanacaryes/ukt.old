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

  sub: Subscription;

  loadedCount = 0;
  ready = false;

  images = [
    '../../assets/acar-carousel/spool',
    '../../assets/acar-carousel/colors',
    '../../assets/acar-carousel/colorcotton'
  ]
  .map(i => this._appService.selectOptimal(i, true, true))
  .concat(this._appService.selectOptimal('../../assets/acar-carousel/colorcotton', true));


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
