import { Client } from './client'
import { Residence } from "./residence";


export class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public cpf: string,
        public cep: string,
        public clientName: string,
        public clientNumber: number,
        public consumedEnergy: number, 
    ) {
        super(name, cpf, cep);
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.75
    }
}