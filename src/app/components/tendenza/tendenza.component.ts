import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Veicolo } from 'src/app/models/veicolo';
import { VeicoloService } from 'src/app/services/veicolo.service';

@Component({
  selector: 'app-tendenza',
  templateUrl: './tendenza.component.html',
  styleUrls: ['./tendenza.component.css']
})
export class TendenzaComponent {
  veicoli:Veicolo[];
  constructor(private service:VeicoloService, private router:Router){
    this.veicoli = service.getAll();
  }
  metodo(id:number){
    this.router.navigate(['dettaglio', id]).then(d => window.location.reload());
  }
  
}
