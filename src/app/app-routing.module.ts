import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NoleggioComponent } from './components/noleggio/noleggio.component';

const routes: Routes = [

{path : '', component : HomeComponent},
{ path : 'noleggio', component : NoleggioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
