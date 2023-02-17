import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Veicolo } from 'src/app/models/veicolo';
import { VeicoloService } from 'src/app/services/veicolo.service';

@Component({
  selector: 'app-info-mezzo',
  templateUrl: './info-mezzo.component.html',
  styleUrls: ['./info-mezzo.component.css']
})
export class InfoMezzoComponent {
  veicolo?:Veicolo;
  id : any= '';
  constructor(private service:VeicoloService, private route:ActivatedRoute){
    this.id =+ route.snapshot.params['id']
    this.veicolo = service.getOne(this.id)
  }

}
