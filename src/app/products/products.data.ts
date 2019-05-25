
interface Product {
  name: string;
  img: string;
  data?: any[];
}

export const PRODUCTS_STATIC_DATA: Product[] = [
  {
    name: 'Enzimler',
    img: '../assets/acar-carousel/auxiliaries.jpg',
    data: [
      { chemical: 'PEROZYM HPK',  desc: 'Konsantre antiperoksit enzimi' },
      { chemical: 'TORAPOLISH W', desc: 'Tüy dökücü enzim' },
      { chemical: 'PEROZYM 216',  desc: 'Antiperoksit enzimi' },
      { chemical: 'TORASIZE NHE', desc: 'Nişasta haşılı sökme enzimi' }
    ]
  },
  {
    name: 'Fabrics',
    img: '../assets/acar-carousel/fabrics.jpg',
    data: [
      { chemical: 'PEROZYM HPK',  desc: 'Konsantre antiperoksit enzimi' },
      { chemical: 'TORAPOLISH W', desc: 'Tüy dökücü enzim' },
      { chemical: 'PEROZYM 216',  desc: 'Antiperoksit enzimi' },
      { chemical: 'TORASIZE NHE', desc: 'Nişasta haşılı sökme enzimi' }
    ]
  },
  {
    name: 'Color Chemistry',
    img: '../assets/acar-carousel/colorcotton.jpg',
    data: [
      { chemical: 'PEROZYM HPK',  desc: 'Konsantre antiperoksit enzimi' },
      { chemical: 'TORAPOLISH W', desc: 'Tüy dökücü enzim' },
      { chemical: 'PEROZYM 216',  desc: 'Antiperoksit enzimi' },
      { chemical: 'TORASIZE NHE', desc: 'Nişasta haşılı sökme enzimi' }
    ]
  }
];
