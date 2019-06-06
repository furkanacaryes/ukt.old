
interface Product {
  name: string;
  img: string;
  data?: Array<{chemical, desc}>;
}

export const PRODUCTS_STATIC_DATA: Product[] = [
  {
    name: 'Enzimler',
    img: '../assets/product-images/optimized/on-islem',
    data: [
      { chemical: 'PEROZYM HPK',  desc: 'Konsantre antiperoksit enzimi' },
      { chemical: 'TORAPOLISH W', desc: 'Tüy dökücü enzim' },
      { chemical: 'PEROZYM 216',  desc: 'Antiperoksit enzimi' },
      { chemical: 'TORASIZE NHE', desc: 'Nişasta haşılı sökme enzimi' }
    ]
  },
  {
    name: 'Islatıcılar',
    img: '../assets/product-images/optimized/on-islem2',
    data: [
      { chemical: 'TORAWET CNR CONC', desc: 'Merserize işlemler için konsantre ıslatıcı (Anyonik)' },
      { chemical: 'TORAWET MASTER', desc: 'Konsantre pad-batch seri boya ıslatıcısı (Anyonik)' },
      { chemical: 'TORAWET MET 30', desc: 'Üniversal nonyonik ıslatıcı ve yıkayıcı malzeme' },
      { chemical: 'TORAWET ARS 60', desc: 'Üniversal nonyonik konsantre ıslatıcı ve yıkayıcı malzeme' },
      { chemical: 'TORAWET AERO', desc: 'Köpüksüz hava aldırıcı, seri ıslatıcı (Anyonik / Nonyonik)' },
      { chemical: 'TORAWET P', desc: 'Pad-batch seri boya ıslatıcısı (Anyonik)' }
    ]
  },
  {
    name: 'İyon Tutucular',
    img: '../assets/product-images/optimized/on-islem',
    data: [
      { chemical: 'IYONEX FE CONC', desc: 'Fosfanat bazlı konsantre iyon tutucu' },
      { chemical: 'STABILOX M', desc: 'Peroksit stabilizatörü' },
      { chemical: 'IYONEX FE', desc: 'Fosfanat bazlı iyon tutucu' },
      { chemical: 'IYONEX DKG', desc: 'Polikarboksilik asit ve fosfanat bazlı iyon tutucu' },
      { chemical: 'IYONEX GFR', desc: 'Polikarboksilik asit ve fosfanat bazlı konsantre iyon tutucu' }
    ]
  },
  {
    name: 'Yumuşatıcılar',
    img: '../assets/product-images/optimized/on-islem',
    data: [
      { chemical: 'TORASOFT ISM', desc: 'Esterquat bazlı yumuşatıcı' },
      { chemical: 'TORASOFT KEK', desc: 'Katyonik yumuşatıcı' },
      { chemical: 'TORASOFT N', desc: 'Konsantre nonyonik yumuşatıcı' },
      { chemical: 'TORASOFT NOY', desc: 'Nonyonik yumuşatıcı' },
      { chemical: 'TORASOFT SEM', desc: 'Şardon emülsiyonu' },
      { chemical: 'TORASOFT M-262', desc: 'Silikonlu katyonik yumuşatıcı' },
      { chemical: 'TORASOFT NSY', desc: 'Silikonlu nonyonik yumuşatıcı' },
      { chemical: 'TORASOFT NPK CONC', desc: 'Konsantre katyonik yumuşatıcı ve avivaj malzemesi' }
    ]
  },
  {
    name: 'Yıkama Yardımcıları',
    img: '../assets/product-images/optimized/yikama-yardimci',
    data: [
      { chemical: 'TORAWASH 1500', desc: 'Reaktif boya ve baskı sonrası konsantre yıkama sabunu' },
      { chemical: 'TORAWASH STAR', desc: 'Pes/Co-Cv karışımlarının boya sonrası ekolojik yıkama malzemesi' },
      { chemical: 'TORAWASH RSH', desc: 'Reaktif boya ve baskı sonrası yıkama sabunu' },
      { chemical: 'TORAWASH YD', desc: 'Zemin kirliliği olan reaktif baskılı kumaşlarda temizleyici ürün' },
      { chemical: 'TORAWASH SR', desc: 'Reaktif boya ve baskı sonrası yıkama sabunu' },
      { chemical: 'WELLTEX BR', desc: 'Geri boyama engelleyici ve yıkayıcı' },
      { chemical: 'TORATEX RA CONC', desc: 'Asidik indirgen' },
      { chemical: 'TORATEX 13017', desc: 'Redüktif yıkama yardımcı kimyasalı' }
    ]
  },
  {
    name: 'Dispergatörler',
    img: '../assets/product-images/optimized/boya-yardimci2',
    data: [
      { chemical: 'DEGAPERS MİKRO', desc: 'Üniversal polyester boya egalizatörü ve dispergatörü' },
      { chemical: 'DEGAPERS DFT', desc: 'PES boya egalizatörü ve dispergatörü' },
      { chemical: 'DEGAPERS DFZ', desc: 'Polyester boya egalizatörü ve difüzyon arttırıcı' },
      { chemical: 'DEGAPERS HTN', desc: 'Polyester boya dispergatörü' },
      { chemical: 'EGAPERS PRINT', desc: 'Polyester boya egalizatörü' },
      { chemical: 'EGAPERS NYL', desc: 'Naylon boya egalizatörü' },
      { chemical: 'EGAPERS AP', desc: 'Akrilik ve akrilik/yün karışımlarında kullanılan dispergatör' },
      { chemical: 'TORAGAL XIR', desc: 'Reaktif boyama için çok fonksiyonlu boyama yardımcısı' }
    ]
  },
  {
    name: 'Fiksatörler',
    img: '../assets/product-images/optimized/boya-yardimci2',
    data: [
      { chemical: 'TORAFIX ALF', desc: 'Formaldehitsiz reaktif ve direkt boya fiksatörü' },
      { chemical: 'TORAFIX PA', desc: 'Poliamid fiksatörü' }
    ]
  },
  {
    name: 'Boya Yardımcılar',
    img: '../assets/product-images/optimized/boya-yardimci',
    data: [
      { chemical: 'TORADYE GOLD', desc: 'Pamuk boyamalarda kullanılan proses hızlandırıcı ürün' },
      { chemical: 'TORATEX K', desc: 'İnceltme banyoları için kostik aktivatörü' },
      { chemical: 'TORATEX RTD', desc: 'Akrilik boya retarderi' }
    ]
  },
  {
    name: 'Dispers Baskı',
    img: '../assets/product-images/optimized/dispers-baski',
    data: [
      { chemical: 'TORAPRINT TMR', desc: 'Doğal dispers baskı kıvamlaştırıcısı' },
      { chemical: 'TORAPRINT BTN CONC', desc: 'Battaniye-polar tipi kalın kumaşlarda kullanılan dispers baskı kıvamlaştırıcı' },
      { chemical: 'TORAPRINT MEGAPERS', desc: 'Dispers baskı için geliştirilmiş likit kıvamlaştırıcı' },
      { chemical: 'TORAPRINT DVA', desc: 'Toz dispers baskı kıvamlaştırıcı' }
    ]
  },
  {
    name: 'Asit Baz Ürünler',
    img: '../assets/product-images/optimized/boya-yardimci2',
    data: [
      { chemical: 'ASITEX S CLASS', desc: 'Uçucu olmayan tampon asit' },
      { chemical: 'ALKATEX PBA', desc: 'Pad-batch boyamalarda kostik silikat yerine kullanılan sıvı alkali' },
      { chemical: 'ASITEX TAC', desc: 'Güçlü tampon asit' },
      { chemical: 'ALKATEX ATM', desc: 'Toz alkali' }
    ]
  },
  {
    name: 'Kombine Ürünler',
    img: '../assets/product-images/optimized/on-islem',
    data: [
      { chemical: 'COMBITEX NEW CONC', desc: 'Konsantre kombin kasar malzemesi' },
      { chemical: 'COMBITEX STRONG', desc: 'Polyester haşıl sökme ve ön yıkama malzemesi' },
      { chemical: 'COMBITEX PWD', desc: 'Viskon için kombin kasar malzemesi' },
      { chemical: 'COMBITEX CV', desc: 'Viskon için kombin kasar malzemesi' },
      { chemical: 'COMBITEX HT BLUE', desc: 'Kombin kasar malzemesi' },
      { chemical: 'COMBITEX NEW', desc: 'Kombin kasar malzemesi' }
    ]
  }
];

// {
//   name: '',
//   img: '../assets/acar-carousel/colorcotton',
//   data: [

//   ]
// }
