import { Veicolo } from "../models/veicolo"

export class VeicoloService{

    private veicoli:Veicolo[] = [

        new Veicolo(

            true,
            'Honda',
            'CBR 1000',
            2,
            217.5,
            999,
            0,
            250,
            'GPS',
            'Cambio Elettronico',
            'Manopole riscaldate',
            32495,
            1,
            1,
            'A',
            true,

        ),
        
        new Veicolo(

            true,
            'Mazda',
            'Az1',
            2,
            64,
            657,
            0,
            150,
            'GPS',
            'Sedili riscaldati',
            'Sensosri di parcheggio',
            43278,
            0,
            1,
            'B',
            true,

        ),

        new Veicolo(

            false,
            'Mercedes-Benz',
            'CLK GTR',
            2,
            64,
            657,
            0,
            150,
            'GPS',
            'Sedili riscaldati',
            'Sensosri di parcheggio',
            43278,
            0,
            1,
            'B',
            true,

        ),

    ]

}