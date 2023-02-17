import { Component } from '@angular/core';
import { Veicolo } from 'src/app/models/veicolo';
import { VeicoloService } from 'src/app/services/veicolo.service';

@Component({
  selector: 'app-stampa-lista-auto',
  templateUrl: './stampa-lista-auto.component.html',
  styleUrls: ['./stampa-lista-auto.component.css']
})
export class StampaListaAutoComponent {
  veicoli:Veicolo[];
  constructor(private service:VeicoloService){
    this.veicoli = service.getAll();
  }

  /*
  btnRimuovi() {
    var i = document.getElementById("1").innerHTML= '';
    delete this.veicoli[i];
  }
  */         
}

