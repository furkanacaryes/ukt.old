import {
  trigger,
  state,
  transition,
  query,
  style,
  animate,
  group,
  stagger
} from '@angular/animations';

export default trigger('enter', [
  state('void', style({ opacity: 0 })),
  state('false', style({ opacity: 0 })),
  state('true', style({ opacity: 1 })),

  transition('* => true', group([
    query('.current .image', [
      style({
        opacity: 0,
        transform: 'scale(1.1) translate3d(50%, 50%, 0)'
      }),
      animate('600ms ease', style({
        opacity: 1,
        transform: 'none'
      }))
    ]),

    query('.current .content__inner > *', [
      style({
        opacity: 0,
        transform: 'translateX(-50%)'
      }),
      stagger(100, [
        animate('600ms ease', style({
          opacity: 1,
          transform: 'none'
        }))
      ])
    ]),

    animate('600ms ease')
  ]))
]);
