import { Client } from './client'
import { Commerce } from './commerce';


export class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public cnpj: string,
        public cep: string,
        public clientName: string,
        public clientNumber: number,
        public consumedEnergy: number, 
    ) {
        super(name, cnpj, cep);
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.53
    }
}