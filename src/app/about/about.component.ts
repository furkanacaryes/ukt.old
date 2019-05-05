import { Component, OnInit } from '@angular/core';

import aboutEnterAnimation from '../Animations/about.enter.animation';

@Component({
  selector: 'ukt-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [aboutEnterAnimation('.about-layout')]
})
export class AboutComponent implements OnInit {

  isLoaded = false;
  background = '../../assets/about-bg.png';

  constructor() { }

  ngOnInit() {
  }

}
