import {
  trigger,
  state,
  transition,
  query,
  stagger,
  group,
  style,
  animate
} from '@angular/animations';

export default trigger('enter', [
  state('void', style({ opacity: 0 })),
  state('false', style({ opacity: 0 })),
  state('true', style({ opacity: 1 })),

  transition('* => true', group([
    query('.product', [
      style({
        opacity: 0,
        transform: 'scale(1.2)'
      }),
      stagger(20, [
        animate('300ms ease', style({
          opacity: 1,
          transform: 'none'
        }))
      ])
    ]),

    animate('600ms ease')
  ]))
]);
