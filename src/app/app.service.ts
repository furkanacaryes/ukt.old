import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppService {

  constructor() { }

  ui: BehaviorSubject<State> = new BehaviorSubject<State>({
    isBusy: true
  });
}

interface State {
  isBusy?: boolean;
}
