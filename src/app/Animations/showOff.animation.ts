import {
  trigger,
  transition,
  query,
  style,
  animate,
  group
} from '@angular/animations';

export default trigger('showOff', [
  transition(':enter', group([
    query('.content', [
      style({
        opacity: 0,
        filter: 'blur(8px)',
        transform: 'perspective(800px) translateZ(300px)'
      }),
      animate('600ms ease', style({
        opacity: 1,
        filter: 'none',
        transform: 'perspective(800px) translateZ(0)'
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
        transform: 'perspective(800px) translateZ(300px)'
      }))
    ]),
    query('#clone', [
      animate('600ms ease', style({
        transform: 'translate3d(0, 0, 0) scale(1)'
      }))
    ]),
    query('.overlay', [
      animate('600ms ease', style({ opacity: 0 }))
    ])
  ]))
]);
