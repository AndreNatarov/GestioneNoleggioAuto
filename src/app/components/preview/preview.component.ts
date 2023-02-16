import { Component } from '@angular/core';
import { Veicolo } from 'src/app/models/veicolo';
import { VeicoloService } from 'src/app/services/veicolo.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {
  veicoli:Veicolo[];
  constructor(private service:VeicoloService){
    this.veicoli = service.getAll();
  }
}
