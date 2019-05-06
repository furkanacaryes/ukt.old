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
  state('false', style({ opacity: 0 })),
  state('true', style({ opacity: 1 })),

  transition('false => true', group([
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

    animate('300ms ease')
  ]))
]);
