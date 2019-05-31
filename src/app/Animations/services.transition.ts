
import {
  trigger,
  transition,
  query,
  group,
  style,
  animate
} from '@angular/animations';

export const servicesTransition = trigger('servicesTransition', [
  transition('* => *', group([
    query(':enter', [
      style({
        opacity: 0,
        // position: 'absolute'
      }),
      animate('600ms 600ms ease', style({
        opacity: 1,
        // position: '*'
      }))
    ]),

    query(':leave', [
      style({
        position: 'absolute',
      }),
      animate('600ms ease', style({
        opacity: 0
      }))
    ], { optional: true })
  ]))
]);
