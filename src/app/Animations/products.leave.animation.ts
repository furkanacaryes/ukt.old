
import {
  transition,
  query,
  animate,
  style,
  stagger,
  group
} from '@angular/animations';

export const productsLeaveAnimation = group([
  // query(':leave', [
  //   animate('600ms ease', style({
  //     opacity: 0
  //   }))
  // ]),

  query(':leave .product', [
    stagger(-20, [
      animate('300ms ease', style({
        opacity: 0,
        transform: 'scale(1.2)'
      }))
    ])
  ]),

  query(':enter', [
    style({
      display: 'none',
    })
  ], { optional: true }),
]);
