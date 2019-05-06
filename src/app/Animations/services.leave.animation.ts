
import {
  group,
  query,
  animate,
  style
} from '@angular/animations';

export default () => group([
  query(':leave', [
    animate('600ms ease', style({
      opacity: 0
    }))
  ]),

  query(':enter', [
    style({
      display: 'none',
    })
  ], { optional: true }),
]);
