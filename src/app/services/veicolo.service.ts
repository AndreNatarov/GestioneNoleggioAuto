import { Veicolo } from "../models/veicolo"

export class VeicoloService{

    private veicoli:Veicolo[] = [

        new Veicolo(

            1,
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

            2,
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

            3,
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

            4,
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

            5,
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

            6,
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

            7,
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

            8,
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

            9,
            false,
            'Mitsubishi',
            'Eclipse',
            4,
            0,
            1997,
            145,
            0,
            150,
            'GPS',
            'Sedili riscaldati',
            'Sensori parcheggio',
            2123,
            0,
            1,
            'B',
            true,
            'Eclipse'

        ),

        new Veicolo(

            10,
            true,
            'Mitsubishi',
            'Lancer Evo X',
            4,
            0,
            2000,
            300,
            0,
            150,
            'GPS',
            'Sedili riscaldati',
            'Sensori parcheggio',
            12445,
            0,
            1,
            'B',
            true,
            'EvoX'

        ),

        new Veicolo(

            11,
            true,
            'Fiat',
            '500',
            4,
            0,
            499.5,
            18,
            0,
            150,
            'GPS',
            'Sedili riscaldati',
            'Sensori parcheggio',
            54549,
            0,
            0,
            'B',
            true,
            'Fiat500'

        ),

        new Veicolo(

            12,
            true,
            'Ford',
            '500',
            4,
            0,
            499.5,
            18,
            0,
            150,
            'GPS',
            'Sedili riscaldati',
            'Sensori parcheggio',
            54549,
            0,
            0,
            'B',
            true,
            'Fiat500'

        ),

    ]


    getAll(){
        return this.veicoli;
    }

}