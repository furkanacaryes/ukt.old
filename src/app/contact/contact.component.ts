import { Component, OnInit } from '@angular/core';

import contactEnterAnimation from '../Animations/about.enter.animation';

@Component({
  selector: 'ukt-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [contactEnterAnimation('.info-box')]
})
export class ContactComponent implements OnInit {

  lat = 40.095677;
  // lng = 29.513057; Original Point
  lng = 29.511557;
  zoom = 17;

  marker = {
    lat: this.lat,
    lng: this.lng + 0.001500
  };

  phones = [
    '(0224) 714 95 96',
    '(0224) 714 91 92',
    '(0224) 719 27 48'
  ];

  location = [
    'Sinanbey Mahallesi',
    'Metal İşleri Sanayi Sitesi',
    '18.Sokak',
    'No: 1',
    'İnegöl/Bursa'
  ];

  isLoaded = false;

  constructor() { }

  ngOnInit() { }

}
