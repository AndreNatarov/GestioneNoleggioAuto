export class Veicolo{

    constructor(

        public marca:string,
        public modello:string,
        public prezzoGiornaliero:number,
        public optional:string,
        public chilometraggio:number,
        public tagVeicolo:string,
        public tagNazione:string,
        public patente:string,
        public immagine:boolean,    //true = DX, false = SX

    ){}

}