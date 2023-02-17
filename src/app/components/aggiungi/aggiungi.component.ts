import { Component } from '@angular/core';
import { Veicolo } from 'src/app/models/veicolo';
import { VeicoloService } from 'src/app/services/veicolo.service';

@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.component.html',
  styleUrls: ['./aggiungi.component.css']
})
export class AggiungiComponent {
  veicoli:Veicolo[];
  constructor(private service:VeicoloService){
    this.veicoli = service.getAll();
  }

  checkTendenza?:boolean;
  Marca?:string;
  Modello?:string;
  Posti?:number;
  Cambio?:number;
  Cilindrata?:number;
  Cavalli?:number;
  prezzoGiornaliero?:number;
  Carburante?:number;
  Optional1?:string;
  Optional2?:string;
  Optional3?:string;
  Chilometraggio?:number;
  Nazione?:number;
  Tipo?:number;
  Patente?:string;

  crea(){
    let temp = this.veicoli[this.veicoli.length-1];
    console.log(this.Marca);
    this.veicoli.push(new Veicolo(temp.id+1, 
      this.checkTendenza,
      this.Marca, 
      this.Modello,
      this.Posti,
      this.Cambio,
      this.Cilindrata,
      this.Cavalli,
      this.Carburante,
      this.prezzoGiornaliero,
      this.Optional1,
      this.Optional2,
      this.Optional3,
      this.Chilometraggio,
      this.Tipo,
      this.Nazione,
      this.Patente,
      true, "placeholder.png"
      ))
  }

}
