import { Component } from '@angular/core';
import { Veicolo } from 'src/app/models/veicolo';
import { VeicoloService } from 'src/app/services/veicolo.service';

@Component({
  selector: 'app-info-mezzo',
  templateUrl: './info-mezzo.component.html',
  styleUrls: ['./info-mezzo.component.css']
})
export class InfoMezzoComponent {
  veicoli:Veicolo[];
  constructor(private service:VeicoloService){
    this.veicoli = service.getAll();
  }
}
