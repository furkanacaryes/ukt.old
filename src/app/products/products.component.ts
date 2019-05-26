import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';

import showOff from '../Animations/showOff.animation';
import productsEnterAnimation from '../Animations/products.enter.animation';
import { PRODUCTS_STATIC_DATA } from './products.data';

import { AppService } from '../app.service';
import { Subscription } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'ukt-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    showOff, productsEnterAnimation
  ]
})
export class ProductsComponent implements OnInit, OnDestroy {

  _products = PRODUCTS_STATIC_DATA;
  products = [];
  selectedProduct;

  sub: Subscription;
  imagesLoaded = 0;
  ready = false;
  styles;
  top;
  listener = ['scroll', _ => document.scrollingElement.scrollTop = this.top];


  constructor(
    private r2: Renderer2,
    private _appService: AppService
  ) { }


  ngOnInit() {
    this._appService.updateMeta({
      title: 'Ürünler',
      description: 'Tekstil Kimyasalları',
      image: this._products[0].img,
      route: 'urunler'
    });

    this.shuffle();

    this.sub = this._appService.ui
      .pipe(debounceTime(100))
      .subscribe(state => this.ready = !state.isBusy);
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  get isReady() {
    return this.isLoaded && this.ready;
  }


  get isLoaded() {
    return this._products.length === this.imagesLoaded;
  }


  get isMobile() {
    return this._appService.isMobile;
  }


  isFilled(p) {
    return typeof p === 'object';
  }


  shuffle() {
    this._products
      .map(p => Object.assign(p, { bg: `url('${p.img}')` }))
      .forEach(p => this.place(p));

    for (let i = 0; i <= 28; i++) {
      if (!this.products[i]) {
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


  showOff(event: { target }, product, slot) {

    if (this._appService.isBrowser) {
      this.top = document.scrollingElement.scrollTop;
      // @ts-ignore
      window.addEventListener(...this.listener);
    }

    this.selectedProduct = event.target.closest('.product');
    this.selectedProduct.p = product;
    this.r2.addClass(this.selectedProduct, 'selected');

    const { top, left } = event.target.getBoundingClientRect();
    const { top: y, left: x } = slot.getBoundingClientRect();

    this.styles = {
      top: `${top - 1.5}px`,
      left: `${left - 1.3}px`,
      opacity: 1,
      transform: `
        translate3d(${x - left}px, ${y - top}px, 0)
        scale(${this.isMobile ? 2 : 3})`
    };
  }


  showStart(clone) {
    for (const prop in this.styles) {
      if (this.styles.hasOwnProperty(prop)) {
        this.setStyle(clone, prop, this.styles[prop]);
      }
    }
  }


  setStyle(elem, prop, val, delay = 0) {
    setTimeout(_ => this.r2.setStyle(elem, prop,  val), delay);
  }


  unselect() {
    if (this._appService.isBrowser) {
      // @ts-ignore
      setTimeout(() => window.removeEventListener(...this.listener), 600);
    }
    this.r2.removeClass(this.selectedProduct, 'selected');
    this.selectedProduct = null;
  }

}
