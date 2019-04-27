import { Component, OnInit, Renderer2 } from '@angular/core';
import { trigger, transition, query, style, animate } from '@angular/animations';

@Component({
  selector: 'ukt-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('showOff', [
      query('.content', [
        transition(':enter', [
          style({
            opacity: 0,
            filter: 'blur(8px)',
            transform: 'perspective(800px) translateZ(200px)'
          }),
          animate('600ms ease', style({
            opacity: 1,
            filter: 'none',
            transform: 'perspective(800px) translateZ(0)'
          }))
        ]),
        transition(':leave', [
          animate('600ms ease', style({
            opacity: 0,
            filter: 'blur(8px)',
            transform: 'perspective(800px) translateZ(200px)'
          }))
        ])
      ])
    ])
  ]
})
export class ProductsComponent implements OnInit {

  products: Array<{name, img, desc}> = [
    {
      name: 'Textile Chemicals',
      img: '../assets/acar-carousel/auxiliaries.jpg',
      desc: 'Lorem ipsum dolor sit amet...'
    },
    {
      name: 'Fabrics',
      img: '../assets/acar-carousel/fabrics.jpg',
      desc: 'Lorem ipsum dolor sit amet...'
    },
    {
      name: 'Color Chemistry',
      img: '../assets/acar-carousel/colorcotton.jpg',
      desc: 'Lorem ipsum dolor sit amet...'
    }
  ];

  selectedProduct;
  styles;

  constructor( private r2: Renderer2 ) { }

  ngOnInit() {
    // TODO: Populate array with random indexes(0-20);
  }

  showOff(event: MouseEvent, product) {
    // TODO: Save scroll position then set overflow hidden

    this.selectedProduct = product;
    const { top, left } = (event.target as HTMLDivElement)
      .getBoundingClientRect();

    this.styles = {
      top: `${top}px`,
      left: `${left}px`,
      opacity: 1,
      transform: `translate3d(${-left}px, ${-top}px, 0) scale(3)`
    };
  }

  showStart(event: AnimationEvent) {
    for (const prop in this.styles) {
      if (this.styles.hasOwnProperty(prop)) {
        setTimeout(_ => {
          this.r2.setStyle(event.element, prop, this.styles[prop]);
        }, 0);
      }
    }
  }

}
