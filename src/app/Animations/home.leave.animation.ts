
import {
  group,
  query,
  animate,
  style,
  stagger
} from '@angular/animations';

export default () => group([
  query(':leave', [
    animate('600ms ease', style({
      opacity: 0
    }))
  ]),

  query(':leave .current .image', [
    animate('600ms ease', style({
      opacity: 0,
      transform: 'scale(1.1) translate3d(50%, 50%, 0)'
    }))
  ]),

  query(':leave .current .content__inner > *', [
    stagger(100, animate('600ms ease', style({
      opacity: 0,
      transform: 'translateX(-50%)'
    })))
  ]),

  query(':enter', [
    style({
      display: 'none',
    })
  ], { optional: true }),
]);
