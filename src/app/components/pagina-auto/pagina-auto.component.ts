import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Veicolo } from 'src/app/models/veicolo';
import { VeicoloService } from 'src/app/services/veicolo.service';

@Component({
  selector: 'app-pagina-auto',
  templateUrl: './pagina-auto.component.html',
  styleUrls: ['./pagina-auto.component.css']
})
export class PaginaAutoComponent {
  veicoli:Veicolo[];
  constructor(private service:VeicoloService, private router:Router){
    this.veicoli = service.getAll();
  }
  AMONGUSS(params:string) {
    alert(`${document.getElementById(params)?.innerHTML}`);
  }
  metodo(id:number){
    this.router.navigate(['dettaglio', id]).then(d => window.location.reload());
  }
  
}
