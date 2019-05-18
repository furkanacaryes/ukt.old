import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import byebyeAnimation from './Animations/byebye.animation';
// import menuCollapseAnimation from './Animations/menu.collapse.animation';

import { AppService } from './app.service';

@Component({
  selector: 'ukt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    byebyeAnimation,
    // menuCollapseAnimation
  ]
})
export class AppComponent implements OnInit {

  location;
  menuView;

  constructor( private _appService: AppService ) {}

  ngOnInit() { }

  toggleMenu() {
    if (this.isMobile) {
      this.menuView = !this.menuView;
    }
  }

  get isMobile() {
    return window.innerWidth < 768;
  }

  setState(isBusy: boolean) {
    this._appService.ui.next({ isBusy });
  }

  routing(o: RouterOutlet) {
    const { component } = o.activatedRoute;
    this.location = (component as { name }).name;
  }
}
