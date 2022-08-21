import { Component, OnInit, OnDestroy } from "@angular/core";
import { Loader } from "@googlemaps/js-api-loader";
import { debounceTime } from "rxjs/operators";
import { Subscription } from "rxjs";

import { aboutEnterAnimation } from "../Animations/about.enter.animation";
import { AppService } from "../app.service";

@Component({
  selector: "ukt-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
  animations: [aboutEnterAnimation],
})
export class ContactComponent implements OnInit, OnDestroy {
  isMapAPILoaded = false;

  lat = 40.095699;
  lng = 29.513072;

  coordinates: google.maps.LatLngLiteral = {
    lat: this.lat,
    lng: this.lng,
  };

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 17,
  };

  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
  };

  markerPosition: google.maps.LatLngLiteral = {
    lat: this.lat,
    lng: this.lng,
  };

  loaded = false;
  ready = false;

  informed = false;

  sub: Subscription;

  constructor(private _appService: AppService) {}

  ngOnInit() {
    this._appService.updateMeta({
      title: "İletişim",
      description: "Etkileşim, ulaşılabilirlik ile başlar.",
      image: "",
      route: "iletisim",
    });

    this.sub = this._appService.ui
      .pipe(debounceTime(100))
      .subscribe((state) => (this.ready = !state.isBusy));

    this.initMap();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  initMap() {
    const loader = new Loader({
      apiKey: "AIzaSyADpOLu2JOtX6Stmy21CG-p4xj10ki2xLQ",
      version: "weekly",
    });

    loader.load().then(() => {
      console.log("Maps API has been loaded!")
      this.isMapAPILoaded = true;
    });
  }

  get isReady() {
    return this.loaded && this.ready;
  }

  get isMobile() {
    return this._appService.isMobile;
  }

  get animateOrWhat() {
    return this.isMobile ? "disabled" : this.isReady;
  }

  toggleInfo() {
    this.informed = !this.informed;
  }
}
