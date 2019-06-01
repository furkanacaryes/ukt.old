import { trigger, transition } from '@angular/animations';

// import {
//   trigger,
//   transition,
//   query,
//   style,
//   animate,
//   group
// } from '@angular/animations';

import { homeLeaveAnimation } from './home.leave.animation';
import { aboutLeaveAnimation } from './about.leave.animation';
import { productsLeaveAnimation } from './products.leave.animation';
import { servicesLeaveAnimation } from './services.leave.animation';

export const byebyeAnimation = trigger('byebye', [
  transition('AboutComponent => *', aboutLeaveAnimation),
  transition('HomeComponent => *', homeLeaveAnimation),
  transition('ServicesComponent => *', servicesLeaveAnimation),
  transition('ProductsComponent => *', productsLeaveAnimation),
  transition('ContactComponent => *', aboutLeaveAnimation)
]);
