import { Veicolo } from "../models/veicolo"

export class VeicoloService{

    private veicoli:Veicolo[] = [

        new Veicolo(

            'Honda',
            'CBR 1000',
            250,
            'GPS',              //Come gestiamo vari optional?
            32945,
            'Moto',             //tag sostituirli con array?
            'Giappone',
            'A3',
            true,   //true = destra && false = sinistra

        )

    ]

}