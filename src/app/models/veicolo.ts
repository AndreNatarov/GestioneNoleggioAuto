export class Veicolo{

    constructor(

        public marca:number,
        public modello:string,
        public prezzoGiornaliero:number,
        public optional:string,         //Come gestiamo i vari optional? Valore da mettere in un array che corrisponde ad un specifico optional?
        public chilometraggio:number,
        public tagVeicolo:string,   //Sostituire valori in valori numerici
        public tagNazione:string,
        public patente:string, 
        public immagine:boolean,    //true = DX, false = SX
        //Bisogna aggiungere specifiche del veicolo (array di array?)
        public tagTendenza: boolean,

    ){}

}