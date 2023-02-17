import { Component } from '@angular/core';
import { Veicolo } from 'src/app/models/veicolo';
import { VeicoloService } from 'src/app/services/veicolo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-moto',
  templateUrl: './pagina-moto.component.html',
  styleUrls: ['./pagina-moto.component.css']
})
export class PaginaMotoComponent {
  veicoli:Veicolo[];
  constructor(private service:VeicoloService, private router:Router){
    this.veicoli = service.getAll();
  }
  metodo(id:number){
    this.router.navigate(['dettaglio', id]).then(d => window.location.reload());
  }
  
}
