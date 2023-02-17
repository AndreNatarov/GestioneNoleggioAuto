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
import { ModulesComponent } from './components/modules/modules.component';
import { VeicoloComponent } from './components/modules/veicolo/veicolo.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { TendenzaComponent } from './components/tendenza/tendenza.component';
import { VeicoloService } from './services/veicolo.service';
import { HomeComponent } from './components/home/home.component';
import { NoleggioComponent } from './components/noleggio/noleggio.component';
import { PaginaAutoComponent } from './components/pagina-auto/pagina-auto.component';
import { PaginaMotoComponent } from './components/pagina-moto/pagina-moto.component';
import { PaginaCamionComponent } from './components/pagina-camion/pagina-camion.component';
import { StampaListaAutoComponent } from './components/stampa-lista-auto/stampa-lista-auto.component';
import { InfoMezzoComponent } from './components/info-mezzo/info-mezzo.component';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from './components/logo/logo.component';
import { AggiungiComponent } from './components/aggiungi/aggiungi.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    AboutComponent,
    DettaglioAutoComponent,
    RicercaComponent,
    HeaderComponent,
    PreviewComponent,
    ModulesComponent,
    VeicoloComponent,
    TemplatesComponent,
    TendenzaComponent,
    HomeComponent,
    NoleggioComponent,
    PaginaAutoComponent,
    PaginaMotoComponent,
    PaginaCamionComponent,
    StampaListaAutoComponent,
    InfoMezzoComponent,
    LogoComponent,
    AggiungiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [VeicoloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
