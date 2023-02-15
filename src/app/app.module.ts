import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { AboutComponent } from './components/about/about.component';
import { DettaglioAutoComponent } from './components/dettaglio-auto/dettaglio-auto.component';
import { RicercaComponent } from './components/ricerca/ricerca.component';
import { HeaderComponent } from './components/header/header.component';
import { PreviewComponent } from './components/preview/preview.component';
import { ServicesComponent } from './components/services/services.component';
import { ModulesComponent } from './components/modules/modules.component';
import { VeicoloComponent } from './components/modules/veicolo/veicolo.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { RicercaHomeComponent } from './components/ricerca-home/ricerca-home.component';
import { TendenzaComponent } from './components/tendenza/tendenza.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    AboutComponent,
    DettaglioAutoComponent,
    RicercaComponent,
    HeaderComponent,
    PreviewComponent,
    ServicesComponent,
    ModulesComponent,
    VeicoloComponent,
    TemplatesComponent,
    RicercaHomeComponent,
    TendenzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
