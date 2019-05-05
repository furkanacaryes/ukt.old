import { Component, OnInit, Renderer2 } from '@angular/core';

import showOff from '../Animations/showOff.animation';
import productsEnterAnimation from '../Animations/products.enter.animation';

@Component({
  selector: 'ukt-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    showOff, productsEnterAnimation
  ]
})
export class ProductsComponent implements OnInit {

  _products: Array<{name, img, desc}> = [
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

  products = [];
  selectedProduct;
  styles;
  imagesLoaded = 0;

  constructor( private r2: Renderer2 ) { }

  ngOnInit() {
    this.shuffle();
  }

  get isLoaded() {
    return this._products.length === this.imagesLoaded;
  }

  isFilled(p) {
    return typeof p === 'object';
  }

  isSelected(p) {
    return p === this.selectedProduct;
  }

  shuffle() {
    this._products
      .map(p => Object.assign(p, { bg: `url('${p.img}')` }))
      .forEach(p => this.place(p));

    for (const p of this.products) {
      if (!p) {
        const i = this.products.indexOf(p);
        this.products[i] = 'empty';
      }
    }
  }

  place(p) {
    const i = this.randomize(28);

    if (this.products.hasOwnProperty(i)) {
      this.place(p);
    } else {
      this.products[i] = p;
    }
  }

  randomize(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  imageLoaded() {
    this.imagesLoaded += 1;
  }

  showOff(event, product, slot) {
    this.selectedProduct = product;
    const { top, left } = event.target.getBoundingClientRect();
    const { top: y, left: x } = slot.getBoundingClientRect();

    this.styles = {
      top: `${top - 1.5}px`,
      left: `${left - 1.3}px`,
      opacity: 1,
      transform: `translate3d(${x - left}px, ${y - top}px, 0) scale(3)`
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
