import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { Meta, Title } from '@angular/platform-browser';

@Injectable()
export class AppService {

  services = [
    {
      name: 'Kalite Kontrol Laboratuvarı',
      routerLink: '/servisler/kalite-kontrol-laboratuvari',
      component: 'KKLabComponent'
    },
    {
      name: 'Uygulama Laboratuvarı',
      routerLink: '/servisler/uygulama-laboratuvari',
      component: 'ULabComponent'
    },
    {
      name: 'Teknik Destek',
      routerLink: '/servisler/teknik-destek',
      component: 'TechSupportComponent'
    }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _meta: Meta,
    private _title: Title
  ) { }

  ui: BehaviorSubject<State> = new BehaviorSubject<State>({
    isBusy: true
  });

  public get isMobile() {
    return this.isBrowser ? window.innerWidth < 768 : false;
  }

  public get isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  public updateMeta(meta: MetaData) {

    const tags = [
      ['twitter:card',        '', 'summary'],
      ['twitter:site',        '', '@uktkimya'],
      ['twitter:title',       '',  meta.title],
      ['twitter:description', '',  meta.description],
      ['twitter:image',       '',  meta.image],

      ['', 'og:type',        'article'],
      ['', 'og:site_name',   'UKT Kimya'],
      ['', 'og:title',        meta.title],
      ['', 'og:description',  meta.description],
      ['', 'og:image',        meta.image],
      ['', 'og:url',          `http://localhost:4200/${meta.route}`],
    ];

    this._title.setTitle(`UKT Kimya | ${meta.title}`);

    tags.forEach(([name, property, content]) => {
      this._meta.updateTag({name, property, content});
    });
  }
}

interface State {
  isBusy?: boolean;
}

interface MetaData {
  title: string;
  description: string;
  image: string;
  route: string;
}
