export class Veicolo{

    constructor(

        public id:number,
        public tagTendenza: boolean,
        public marca:string,
        public modello:string,
        public numeroPosti:number,
        public cambio:number,       //0 = Manuale, 1 = Sequenziale, 2 = Automatico
        public cilindrata:number,
        public cavalli:number,
        public carburante:number,   //0 = benzina, 1 = gasolio
        public prezzoGiornaliero:number,
        public optional1:string,
        public optional2:string,
        public optional3:string,
        public chilometraggio:number,
        public tagVeicolo:number,       //0 = auto, 1 = moto, 2 = camion 
        public tagNazione:number,       //0 = Europea, 1 = Giapponese, 2 = Americana
        public patente:string, 
        public immagine:boolean,    //true = DX, false = SX
        public nomeImmagine:string,
        
    ){}

}