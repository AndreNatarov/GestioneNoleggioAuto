import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { AutoComponent } from './components/auto/auto.component';
import { ChiSiamoComponent } from './components/chi-siamo/chi-siamo.component';
import { AboutComponent } from './components/about/about.component';
import { DettaglioAutoComponent } from './components/dettaglio-auto/dettaglio-auto.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    AutoComponent,
    ChiSiamoComponent,
    AboutComponent,
    DettaglioAutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
