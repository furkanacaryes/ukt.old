import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import byebyeAnimation from './Animations/byebye.animation';

import { AppService } from './app.service';

@Component({
  selector: 'ukt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [byebyeAnimation]
})
export class AppComponent implements OnInit {

  constructor( private _appService: AppService ) {}

  ngOnInit() { }

  setState(isBusy: boolean) {
    this._appService.ui.next({ isBusy });
  }

  routing(o: RouterOutlet) {
    const { component, children } = o.activatedRoute;

    if (children.length > 0) {
      this.location = children[0].component.name;
    } else {
      this.location = component.name;
    }
  }
}
