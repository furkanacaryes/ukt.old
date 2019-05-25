
export const PRODUCTS_STATIC_DATA: Product[] = [
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

interface Product {
  name: string;
  img: string;
  desc: string;
}
