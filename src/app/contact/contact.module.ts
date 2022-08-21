import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Route, RouterModule } from "@angular/router";

import { SharedModule } from "../shared.module";
import { ContactComponent } from "./contact.component";
import { GoogleMapsModule } from "@angular/google-maps";

const routes: Route[] = [{ path: "", component: ContactComponent }];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    GoogleMapsModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class ContactModule {}
