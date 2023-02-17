import { Component } from '@angular/core';
import { Veicolo } from 'src/app/models/veicolo';
import { VeicoloService } from 'src/app/services/veicolo.service';

@Component({
  selector: 'app-pagina-moto',
  templateUrl: './pagina-moto.component.html',
  styleUrls: ['./pagina-moto.component.css']
})
export class PaginaMotoComponent {
  veicoli:Veicolo[];
  constructor(private service:VeicoloService){
    this.veicoli = service.getAll();
  }
}
