import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import byebyeAnimation from './Animations/byebye.animation';
import somethingCool from './Animations/menu.animation';

import { AppService } from './app.service';

@Component({
  selector: 'ukt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    byebyeAnimation,
    somethingCool
  ]
})
export class AppComponent implements OnInit {

  location;
  menuView = false;

  constructor( private _appService: AppService ) {}

  ngOnInit() {
    this.setMenuView();

    if (this._appService.isBrowser) {
      window.addEventListener('resize', (e) => this.setMenuView());
    }
  }

  setMenuView() {
    this.menuView = this.isMobile ? false : null;
  }

  toggleMenu() {
    if (this.isMobile) {
      this.menuView = !this.menuView;
    }
  }

  get isMobile() {
    return this._appService.isMobile;
  }

  setState(isBusy: boolean) {
    this._appService.ui.next({ isBusy });
  }

  routing(o: RouterOutlet) {
    const component = (o.activatedRoute.component as IComponent);

    if ((component).hasOwnProperty('name')) {
      this.location = component.name;
    }

    this.menuView = false;
  }
}

interface IComponent {
  name?: string;
}
