import { trigger, state, transition, query, stagger, group, style, animate } from "@angular/animations";

// Used by about.component and contact.component
export default (target) => {
  return trigger('enter', [
    state('false', style({ opacity: 0 })),
    state('true', style({ opacity: 1 })),

    transition('false => true', group([
      query(target, [
        style({
          opacity: 0,
          transform: 'scale(1.2)'
        }),
        animate('1s ease', style({
          opacity: 1,
          transform: 'none'
        }))
      ]),

      animate('300ms ease')
    ]))
  ]);
};
