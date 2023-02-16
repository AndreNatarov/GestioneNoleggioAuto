import { Component } from '@angular/core';
import { Veicolo } from 'src/app/models/veicolo';
import { VeicoloService } from 'src/app/services/veicolo.service';

@Component({
  selector: 'app-pagina-camion',
  templateUrl: './pagina-camion.component.html',
  styleUrls: ['./pagina-camion.component.css']
})
export class PaginaCamionComponent {
  veicoli:Veicolo[];
  constructor(private service:VeicoloService){
    this.veicoli = service.getAll();
  }
}
