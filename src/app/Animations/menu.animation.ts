
import {
  trigger,
  transition,
  state,
  query,
  group,
  style,
  animate,
  stagger
} from '@angular/animations';

export const menuAnimation = trigger('somethingCool', [
  state('false', style({
    transform: '*',
  })),
  state('true', style({
    transform: 'translateY(0)',
    backgroundPosition: '0 0'
  })),

  transition('false => true', group([

    query('.menu-item-slot', [
      style({
        opacity: 0,
        filter: 'blur(2px)',
        transform: 'perspective(800px) translateZ(200px)'
      }),
      stagger(50, animate('400ms 400ms ease', style({
        opacity: 1,
        filter: 'blur(0)',
        transform: 'perspective(800px) translateZ(0)'
      })))
    ]),

    animate('600ms ease')
  ])),

  transition('true => false', group([

    query('.menu-item-slot', [
      style({
        display: 'flex'
      }),
      stagger(-50, animate('400ms ease', style({
        opacity: 0,
        filter: 'blur(2px)',
        transform: 'perspective(800px) translateZ(200px)'
      })))
    ]),

    animate('600ms 500ms ease')
  ]))
]);
