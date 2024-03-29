import {
  trigger,
  state,
  transition,
  query,
  group,
  style,
  animate
} from '@angular/animations';

// Used by about.component and contact.component
export const aboutEnterAnimation = trigger('enter', [
  state('void', style({ opacity: 0 })),
  state('false', style({ opacity: 0 })),
  state('true', style({ opacity: 1 })),
  state('disabled', style({ opacity: 1 })),

  transition('* => disabled', animate('600ms ease')),

  transition('* => true', group([
    query('.info-box, .about-layout', [
      style({
        filter: 'blur(4px)',
        // opacity: 0,
        transform: 'scale(1.2)'
      }),
      animate('600ms ease', style({
        filter: 'none',
        // opacity: 1,
        transform: 'none'
      }))
    ], { optional: true }),

    animate('600ms ease')
  ]))
]);
