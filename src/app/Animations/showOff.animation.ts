import {
  trigger,
  transition,
  query,
  style,
  animate,
  group
} from '@angular/animations';

export const showOff = trigger('showOff', [
  transition(':enter', group([
    query('.content', [
      style({
        opacity: 0,
        filter: 'blur(8px)',
        transform: 'translateZ(300px)'
      }),
      animate('600ms ease', style({
        opacity: 1,
        filter: 'none',
        transform: 'translateZ(0)'
      }))
    ]),
    query('.overlay', [
      style({ opacity: 0 }),
      animate('600ms ease', style({ opacity: 1 }))
    ])
  ])),

  transition(':leave', group([
    query('.content', [
      animate('600ms ease', style({
        opacity: 0,
        filter: 'blur(8px)',
        transform: 'translateZ(300px)'
      }))
    ]),
    query('#clone', [
      animate('600ms ease', style({
        transform: 'translate3d(0, 0, 0) scale(1)'
      }))
    ]),
    query('.overlay', [
      animate('600ms ease', style({ opacity: 0 }))
    ]),
    query('.hoverlay', [
      animate('600ms ease', style({ opacity: 1 }))
    ])
  ]))
]);
