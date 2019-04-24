import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'ukt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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

  constructor() { }

  ngOnInit() {
  }

}

interface Slide {
  heading: string;
  desc: string;
  button?: string;
  img: string;
}
