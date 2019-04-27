import { Component, OnInit, Renderer2 } from '@angular/core';
import { trigger, transition, query, group, style, animate } from '@angular/animations';

@Component({
  selector: 'ukt-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('showOff', [
      transition(':enter', [
        query('.content', [
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
        ])
      ]),

      transition(':leave', group([
        query('.content', [
          animate('600ms ease', style({
            opacity: 0,
            filter: 'blur(8px)',
            transform: 'perspective(800px) translateZ(200px)'
          }))
        ]),
        query('#clone', [
          animate('600ms ease', style({
            transform: 'translate3d(0, 0, 0) scale(1)'
          }))
        ])
      ]))
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

  showStart(clone) {
    for (const prop in this.styles) {
      if (this.styles.hasOwnProperty(prop)) {
        this.setStyle(clone, prop, this.styles[prop]);
      }
    }
  }

  putItBack(clone) {
    // console.log(clone);
    this.selectedProduct = null;
    // this.setStyle(clone, 'transform', 'unset');
  }

  setStyle(elem, prop, val) {
    setTimeout(_ => { this.r2.setStyle(elem, prop, val) }, 0);
  }

}
