import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class AppService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ui: BehaviorSubject<State> = new BehaviorSubject<State>({
    isBusy: true
  });

  public get isMobile() {
    return this.isBrowser ? window.innerWidth < 768 : false;
  }

  public get isBrowser() {
    return isPlatformBrowser(this.platformId);
  }
}

interface State {
  isBusy?: boolean;
}
