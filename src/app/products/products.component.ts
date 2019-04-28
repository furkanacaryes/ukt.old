import { Component, OnInit, Renderer2 } from '@angular/core';
import { trigger } from '@angular/animations';
import showOff from '../Animations/showOff.animation';

@Component({
  selector: 'ukt-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('showOff', showOff)
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

    // Scale up to 3 then calculate left center;

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

  setStyle(elem, prop, val) {
    setTimeout(_ => { this.r2.setStyle(elem, prop, val) }, 0);
  }

}
