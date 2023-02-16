import { Veicolo } from "../models/veicolo"

export class VeicoloService{

    private veicoli:Veicolo[] = [

        new Veicolo(

            true,
            'Honda',
            'CBR 1000',
            2,
            0,
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
            'CBR1000'

        ),
        
        new Veicolo(

            true,
            'Mazda',
            'Az1',
            0,
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
            'AZ1'

        ),

        new Veicolo(

            false,
            'Mercedes-Benz',
            'CLK GTR',
            2,
            1,
            600,
            745.5,
            0,
            400,
            'GPS',
            'Sedili riscaldati',
            'Sensosri di parcheggio',
            13959,
            0,
            0,
            'B',
            true,
            'CLKGTR'

        ),

        new Veicolo(

            false,
            'Lamborghini',
            'Countach',
            2,
            0,
            375,
            4971,
            0,
            789,
            'GPS',
            'Sedili riscaldati',
            'Sensosri di parcheggio',
            984,
            0,
            0,
            'B',
            true,
            'Countach'

        ),

        new Veicolo(

            false,
            'Daf',
            '2021',
            2,
            2,
            530,
            7500,
            1,
            400,
            'GPS',
            'Sedili riscaldati',
            'Sensosri di parcheggio',
            139459,
            2,
            0,
            'C',
            true,
            'DafCamion'

        ),


    ]


    getAll(){
        return this.veicoli;
    }

}