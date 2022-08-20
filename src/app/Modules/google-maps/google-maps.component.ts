import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";

import { MapOptions } from "./google-maps.types";

@Component({
  selector: "map",
  templateUrl: "./google-maps.component.html",
  styleUrls: ["./google-maps.component.scss"],
})
export class GoogleMapsComponent implements OnInit {
  apiLoaded: Observable<boolean>;
  @Input("options") options: MapOptions;
  @Output() onLoad = new EventEmitter();

  onTilesLoaded() {
    console.log("[MAPS] tiles loaded");
    this.onLoad.emit();
  }

  mapOptions: google.maps.MapOptions;
  markerOptions;

  constructor(httpClient: HttpClient) {
    console.log("API Key:", environment.MAPS_API_KEY);

    this.apiLoaded = httpClient
      .jsonp(
        `https://maps.googleapis.com/maps/api/js?key=${environment.MAPS_API_KEY}`,
        "callback"
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  ngOnInit() {
    this.mapOptions = {
      center: this.options.center,
      zoom: this.options.zoom,
    };

    this.markerOptions = this.options.marker;
  }
}
