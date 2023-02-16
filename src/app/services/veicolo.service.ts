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
            800,
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

        new Veicolo(

            true,
            'Ducati',
            'Street Fighter',
            1,
            0,
            1103,
            208,
            0,
            250,
            'GPS',
            'Cambio Elettronico',
            'Manopole riscaldate',
            14590,
            1,
            0,
            'A',
            true,
            'DucatiStreetFighter'

        ),

        new Veicolo(

            true,
            'BMW',
            'E30 M3',
            4,
            0,
            3999,
            350,
            0,
            200,
            'GPS',
            'Sedili riscaldati',
            'Sensori parcheggio',
            5433,
            0,
            0,
            'B',
            true,
            'E30M3'

        ),

        new Veicolo(

            false,
            'BMW',
            'E92 M3',
            4,
            0,
            3999,
            420,
            0,
            200,
            'GPS',
            'Sedili riscaldati',
            'Sensori parcheggio',
            5463,
            0,
            0,
            'B',
            true,
            'E92M3'

        ),

        new Veicolo(

            true,
            'BMW',
            'E30 M3',
            4,
            0,
            3999,
            350,
            0,
            200,
            'GPS',
            'Sedili riscaldati',
            'Sensori parcheggio',
            5433,
            0,
            0,
            'B',
            true,
            'E30M3'

        ),

        new Veicolo(

            false,
            'Mitsubishi',
            'Eclipse',
            4,
            0,
            1997,
            145,
            0,
            200,
            'GPS',
            'Sedili riscaldati',
            'Sensori parcheggio',
            5433,
            0,
            0,
            'B',
            true,
            'E30M3'

        ),



    ]


    getAll(){
        return this.veicoli;
    }

}