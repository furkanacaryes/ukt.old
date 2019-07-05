
interface Product {
  name: string;
  img: string;
  data?: Array<{chemical, desc}>;
}

export const PRODUCTS_STATIC_DATA: Product[] = [
  {
    name: 'Enzimler',
    img: '../assets/product-images/on-islem'
  },
  {
    name: 'Islatıcılar',
    img: '../assets/product-images/on-islem2'
  },
  {
    name: 'İyon Tutucular',
    img: '../assets/product-images/on-islem'
  },
  {
    name: 'Yumuşatıcılar',
    img: '../assets/product-images/on-islem'
  },
  {
    name: 'Yıkama Yardımcıları',
    img: '../assets/product-images/yikama-yardimci'
  },
  {
    name: 'Dispergatörler',
    img: '../assets/product-images/boya-yardimci2'
  },
  {
    name: 'Fiksatörler',
    img: '../assets/product-images/boya-yardimci2'
  },
  {
    name: 'Boya Yardımcıları',
    img: '../assets/product-images/boya-yardimci'
  },
  {
    name: 'Dispers Baskı',
    img: '../assets/product-images/dispers-baski'
  },
  {
    name: 'Asit Baz Ürünler',
    img: '../assets/product-images/boya-yardimci2'
  },
  {
    name: 'Kombine Ürünler',
    img: '../assets/product-images/on-islem'
  }
];
