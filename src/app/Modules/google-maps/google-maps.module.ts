import { NgModule } from "@angular/core";
import { GoogleMapsModule as GMapsModule } from "@angular/google-maps";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";

import { GoogleMapsComponent } from "./google-maps.component";

@NgModule({
  declarations: [GoogleMapsComponent],
  imports: [CommonModule, GMapsModule, HttpClientModule, HttpClientJsonpModule],
  exports: [GoogleMapsComponent],
})
export class GoogleMapsModule {}
