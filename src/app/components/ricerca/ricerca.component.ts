import { Component, EventEmitter, Output} from '@angular/core';
import { Veicolo } from 'src/app/models/veicolo';
import { VeicoloService } from 'src/app/services/veicolo.service';
@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent{
  @Output() cercaEvent = new EventEmitter();
  
  valore = '';

  cerca()
  { 
    this.cercaEvent.emit(this.valore);   
  }

  veicoli:Veicolo[];
  constructor(private service:VeicoloService){
    this.veicoli = service.getAll();
  }

}
