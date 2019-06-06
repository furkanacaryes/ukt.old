import { Component, OnInit, OnDestroy } from '@angular/core';

import { homeEnterAnimation } from '../Animations/home.enter.animation';

import { Subscription } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

import { slides } from './home.data';

import { AppService } from '../app.service';

@Component({
  selector: 'ukt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [homeEnterAnimation]
})
export class HomeComponent implements OnInit, OnDestroy {

  slides: Slide[] = slides;

  loadedCount = 0;
  ready = false;

  sub: Subscription;


  constructor(private _appService: AppService) { }

  ngOnInit() {
    this._appService.updateMeta({
      title: 'Anasayfa',
      description: 'UKT TEKSTİL VE KİMYASALLARI SAN. TİC. LTD. ŞTİ.',
      image: this.slides[0].img,
      route: ''
    });

    this.sub = this._appService.ui
      .pipe(debounceTime(100))
      .subscribe(state => this.ready = !state.isBusy);

    this.slides = this.slides.map(s => {
      return {
        ...s,
        optimal: this._appService.selectOptimal(s.img)
      };
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  get isMobile() {
    return this._appService.isMobile;
  }

  get isLoaded() {
    return this.loadedCount === this.slides.length;
  }

  get isReady() {
    return this.isLoaded && this.ready;
  }

  imageLoaded() {
    this.loadedCount += 1;
  }

}

interface Slide {
  heading: string;
  desc: string;
  button?: string;
  img: string;
  routerLink?: string;
}
