import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NoleggioComponent } from './components/noleggio/noleggio.component';

const routes: Routes = [

{path : '', component : HomeComponent},
{ path : 'noleggio', component : NoleggioComponent},
{ path : 'about', component : AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
