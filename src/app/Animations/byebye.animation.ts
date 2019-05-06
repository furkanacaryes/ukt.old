import { trigger, transition } from '@angular/animations';

import homeLeaveAnimation from './home.leave.animation';
import aboutLeaveAnimation from './about.leave.animation';

export default trigger('byebye', [
  transition('AboutComponent => *', aboutLeaveAnimation()),
  transition('HomeComponent => *', homeLeaveAnimation()),
  // transition('ServicesComponent => *', servicesLeaveAnimation()),
  // transition('ProductsComponent => *', productsLeaveAnimation()),
  // transition('ContactComponent => *', contactLeaveAnimation())
]);
