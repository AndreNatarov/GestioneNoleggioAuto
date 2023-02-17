import { Component } from '@angular/core';
import { Veicolo } from 'src/app/models/veicolo';
import { VeicoloService } from 'src/app/services/veicolo.service';

@Component({
  selector: 'app-pagina-auto',
  templateUrl: './pagina-auto.component.html',
  styleUrls: ['./pagina-auto.component.css']
})
export class PaginaAutoComponent {
  veicoli:Veicolo[];
  constructor(private service:VeicoloService){
    this.veicoli = service.getAll();
  }
  AMONGUSS(params:string) {
    alert(`${document.getElementById(params)?.innerHTML}`);
  }
}
