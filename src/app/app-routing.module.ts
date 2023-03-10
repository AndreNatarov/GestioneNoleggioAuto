import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AggiungiComponent } from './components/aggiungi/aggiungi.component';
import { DettaglioAutoComponent } from './components/dettaglio-auto/dettaglio-auto.component';
import { HomeComponent } from './components/home/home.component';
import { NoleggioComponent } from './components/noleggio/noleggio.component';
import { PaginaAutoComponent } from './components/pagina-auto/pagina-auto.component';
import { PaginaCamionComponent } from './components/pagina-camion/pagina-camion.component';
import { PaginaMotoComponent } from './components/pagina-moto/pagina-moto.component';

const routes: Routes = [

{path : '', component : HomeComponent},
{ path : 'noleggio', component : NoleggioComponent},
{ path : 'about', component : AboutComponent},
{ path : 'auto', component : PaginaAutoComponent},
{ path : 'moto', component : PaginaMotoComponent},
{ path : 'camion', component : PaginaCamionComponent},
{ path : 'dettaglio/:id', component : DettaglioAutoComponent},
{ path : 'aggiungi', component : AggiungiComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
