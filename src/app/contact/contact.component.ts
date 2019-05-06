import { Component, OnInit, OnDestroy } from '@angular/core';

import aboutEnterAnimation from '../Animations/about.enter.animation';

import { AppService } from '../app.service';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ukt-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [aboutEnterAnimation('.info-box')]
})
export class ContactComponent implements OnInit, OnDestroy {

  lat = 40.095677;
  // lng = 29.513057; Original Point
  lng = 29.511557;
  zoom = 17;

  marker = {
    lat: this.lat,
    lng: this.lng + 0.001500
  };

  isLoaded = false;
  ready = false;

  sub: Subscription;

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
