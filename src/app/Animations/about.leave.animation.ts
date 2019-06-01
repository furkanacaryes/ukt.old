
import {
  group,
  query,
  animate,
  style
} from '@angular/animations';

export const aboutLeaveAnimation = group([
  query(':leave', [
    animate('600ms ease', style({
      opacity: 0
    }))
  ]),

  query(`:leave .info-box, :leave .about-layout`, [
    animate('600ms ease', style({
      filter: 'blur(4px)',
      opacity: 0,
      transform: 'scale(1.2)'
    }))
  ], { optional: true }),

  query(':enter', [
    style({
      display: 'none',
    })
  ], { optional: true }),
]);
