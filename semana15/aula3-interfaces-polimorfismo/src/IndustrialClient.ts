import { Client } from './client'
import { Industry } from './industry';


export class IndustrialClient extends Industry implements Client {
    constructor(
        public industryName: string,
        public industryNumber: string,
        public cep: string,
        public clientName: string,
        public clientNumber: number,
        public consumedEnergy: number, 
    ) {
        super(industryName, industryNumber, cep);
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.45 + 10000
    }
}