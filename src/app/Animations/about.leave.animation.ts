
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

  query(':leave .about-layout', [
    animate('600ms ease', style({
      filter: 'blur(4px)',
      opacity: 0,
      transform: 'scale(1.2)'
    }))
  ]),

  query(':enter', [
    style({
      display: 'none',
    })
  ], { optional: true }),
]);
