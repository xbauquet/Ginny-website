import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ButtonComponent} from "./button/button.component";
import {MatIconModule} from "@angular/material/icon";
import {ActionButtonComponent} from "./action-button/action-button.component";
import {WebsiteRowComponent} from "./website-row/website-row.component";

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ActionButtonComponent,
    WebsiteRowComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
