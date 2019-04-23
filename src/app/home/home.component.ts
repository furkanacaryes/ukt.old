import { Component, OnInit } from '@angular/core';

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
      alt: 'Colorful fabrics',
      button: 'İncele'
    },
    // {
    //   heading: 'Auxiliaries',
    //   desc: 'Lorem ipsum dolor sit amet...',
    //   img: '../assets/acar-carousel/auxiliaries.jpg',
    //   alt: 'Textile auxiliaries for colorful fabrics',
    //   button: 'İncele'
    // },
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
  alt: string;
}
