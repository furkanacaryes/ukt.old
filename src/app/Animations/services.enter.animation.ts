
import {
  trigger,
  state,
  transition,
  query,
  animate,
  style,
  stagger,
  group
} from '@angular/animations';

export default trigger('enter', [
  state('false', style({ opacity: 0 })),
  state('true', style({ opacity: 1 })),

  transition('false => true', group([
    animate('600ms ease')
  ]))
]);
