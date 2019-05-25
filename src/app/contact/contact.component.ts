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

  marker = {
    lat: 40.095699,
    lng: 29.513072
  };

  lat = this.marker.lat;
  lng = this.isMobile ? this.marker.lng : 29.511557;
  zoom = 17;

  isLoaded = false;
  ready = false;

  informed = false;

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

  get isMobile() {
    return this._appService.isMobile;
  }

  get animateOrWhat() {
    return this.isMobile ? 'disabled' : this.isReady;
  }

  toggleInfo() {
    this.informed = !this.informed;
  }

}
