import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CbsUiComponentsModule } from 'projects/cbs-ui-components/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CbsUiComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
