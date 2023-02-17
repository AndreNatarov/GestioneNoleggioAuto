import { Component } from '@angular/core';
import { Veicolo } from 'src/app/models/veicolo';
import { VeicoloService } from 'src/app/services/veicolo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stampa-lista-auto',
  templateUrl: './stampa-lista-auto.component.html',
  styleUrls: ['./stampa-lista-auto.component.css']
})
export class StampaListaAutoComponent {
  veicoli:Veicolo[];
  constructor(private service:VeicoloService, private router:Router){
    this.veicoli = service.getAll();
  }

  metodo(id:number){
    this.router.navigate(['dettaglio', id]).then(d => window.location.reload());
  }       
}

