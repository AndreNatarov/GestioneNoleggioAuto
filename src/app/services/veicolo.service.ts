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
            'CBR1000.png'

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
            'AZ1.png'

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
            'CLKGTR.png'

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
            'Countach.png'

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
            'DafCamion.png'

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
            'DucatiStreetFighter.png'

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
            'E30M3.png'

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
            'E92M3.png'

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
            'Eclipse.png'

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
            200,
            'GPS',
            'Sedili riscaldati',
            'Sensori parcheggio',
            12445,
            0,
            1,
            'B',
            true,
            'EvoX.png'

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
            'Fiat500.png'

        ),

        new Veicolo(

            12,
            false,
            'Ford',
            '1842T',
            2,
            2,
            8000,
            420,
            0,
            800,
            'GPS',
            'Sedili riscaldati',
            'Sensori parcheggio',
            545496,
            2,
            2,
            'C',
            true,
            'FordCamion.png'

        ),

        new Veicolo(

            13,
            false,
            'Suzuki',
            'GSXR 1000',
            1,
            0,
            1000,
            201.9,
            0,
            230,
            'GPS',
            'ABS',
            'Manopole riscaldate',
            6535,
            1,
            1,
            'A',
            true,
            'GSXR1000.png'

        ),

        new Veicolo(

            14,
            false,
            'Porsche',
            'GT3 Rs',
            2,
            1,
            3996,
            525,
            0,
            310,
            'GPS',
            'Sensori parcheggio',
            'Sedili riscaldati',
            35253,
            0,
            0,
            'B',
            true,
            'GT3RS.png'

        ),

        new Veicolo(

            15,
            false,
            'Suzuki',
            'Hayabusa',
            1,
            0,
            1340,
            190,
            0,
            225,
            'GPS',
            'ABS',
            'Manopole riscaldate',
            25532,
            1,
            1,
            'A',
            true,
            'Hayabusa.png'

        ),

        new Veicolo(

            16,
            false,
            'Iveco',
            'Stralis',
            2,
            2,
            7790,
            440,
            1,
            780,
            'GPS',
            'Sedili riscaldati',
            'Sensori parcheggio',
            205213,
            2,
            0,
            'C',
            true,
            'IvecoCamion.png'

        ),

        new Veicolo(

            17,
            false,
            'Man',
            'TGX Euro 6',
            2,
            2,
            12419,
            470,
            1,
            780,
            'GPS',
            'Sedili riscaldati',
            'Sensori parcheggio',
            205213,
            2,
            0,
            'C',
            true,
            'ManCamion.png'

        ),

        new Veicolo(

            18,
            false,
            'Mercedes-Benz',
            'Actros',
            2,
            2,
            12809,
            625,
            1,
            850,
            'GPS',
            'Sedili riscaldati',
            'Sensori parcheggio',
            326924,
            2,
            0,
            'C',
            true,
            'MercedesCamion.png'

        ),

        new Veicolo(

            19,
            true,
            'Mazda',
            'MR2',
            2,
            0,
            1998,
            156,
            0,
            200,
            'GPS',
            'Sedili riscaldati',
            'Sensori parcheggio',
            20213,
            0,
            1,
            'B',
            true,
            'MR2.png'

        ),

        new Veicolo(

            20,
            false,
            'Mazda',
            'Mx-5',
            2,
            0,
            1597,
            110,
            0,
            180,
            'GPS',
            'Sedili riscaldati',
            'Sensori parcheggio',
            56846,
            0,
            1,
            'B',
            true,
            'MX5.png'

        ),

        new Veicolo(

            21,
            false,
            'Honda',
            'NSX',
            2,
            0,
            3197,
            280,
            0,
            250,
            'GPS',
            'Sedili riscaldati',
            'Sensori parcheggio',
            21459,
            0,
            1,
            'B',
            true,
            'MX5.png'

        ),

        new Veicolo(

            22,
            false,
            'Renault',
            'Sleeper',
            2,
            2,
            12800,
            480,
            1,
            860,
            'GPS',
            'Sedili riscaldati',
            'Sensori parcheggio',
            657855,
            0,
            1,
            'C',
            true,
            'RenaultCamion.png'

        ),


        

    ]


    getAll(){
        return this.veicoli;
    }

}