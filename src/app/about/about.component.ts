import { Component, OnInit, OnDestroy } from '@angular/core';

import { aboutEnterAnimation } from '../Animations/about.enter.animation';

import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { AppService } from '../app.service';

@Component({
  selector: 'ukt-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [aboutEnterAnimation('.about-layout')]
})
export class AboutComponent implements OnInit, OnDestroy {

  isLoaded = false;
  ready = false;
  background = '../../assets/about-bg.png';
  sub: Subscription;

  constructor( private _appService: AppService ) { }

  ngOnInit() {
    this._appService.updateMeta({
      title: 'Hakkımızda',
      description: 'Tekstil Kimyasalları',
      image: '',
      route: 'hakkimizda'
    });

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
