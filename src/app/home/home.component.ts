import { Component, OnInit, ViewChild } from '@angular/core';

import homeEnterAnimation from '../Animations/home.enter.animation';

@Component({
  selector: 'ukt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [homeEnterAnimation]
})
export class HomeComponent implements OnInit {

  slides: Slide[] = [
    {
      heading: 'Fabrics',
      desc: 'Lorem ipsum dolor sit amet...',
      img: '../assets/acar-carousel/fabrics.jpg',
      button: 'İncele'
    },
    {
      heading: 'Auxiliaries',
      desc: 'Lorem ipsum dolor sit amet...',
      img: '../assets/acar-carousel/auxiliaries.jpg',
      button: 'İncele'
    },
    {
      heading: 'Color Cotton',
      desc: 'Lorem ipsum dolor sit amet...',
      img: '../assets/acar-carousel/colorcotton.jpg',
      button: 'İncele'
    },
    {
      heading: 'Color Chemistry',
      desc: 'Lorem ipsum dolor sit amet...',
      img: '../assets/acar-carousel/colors.jpg',
      button: 'İncele'
    }
  ];

  loadedCount = 0;

  constructor() { }

  ngOnInit() {
  }

  get isLoaded() {
    return this.loadedCount === this.slides.length;
  }

  imageLoaded() {
    this.loadedCount += 1;
  }

}

interface Slide {
  heading: string;
  desc: string;
  button?: string;
  img: string;
}
