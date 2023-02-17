import { Component } from '@angular/core';
import { Veicolo } from 'src/app/models/veicolo';
import { VeicoloService } from 'src/app/services/veicolo.service';

@Component({
  selector: 'app-tendenza',
  templateUrl: './tendenza.component.html',
  styleUrls: ['./tendenza.component.css']
})
export class TendenzaComponent {
  veicoli:Veicolo[];
  constructor(private service:VeicoloService){
    this.veicoli = service.getAll();
  }
  cerca(valore:string) {
    this.veicoli = this.service.cerca(valore);
}
}
