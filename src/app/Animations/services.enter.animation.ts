
import {
  trigger,
  state,
  transition,
  query,
  animate,
  style,
  stagger,
  group
} from '@angular/animations';

export const servicesEnterAnimation = trigger('enter', [
  state('void', style({ opacity: 0 })),
  state('false', style({ opacity: 0 })),
  state('true', style({ opacity: 1 })),

  transition('* => true', group([
    animate('600ms ease')
  ]))
]);
