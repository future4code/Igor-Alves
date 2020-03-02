import { Client } from "./client";

export class ClientManager {
    public clients: Client[] 

    constructor() {
        this.clients = []
    }
    
    public addClient(client: Client): void {
        this.clients.push(client)
    }

    public getClientsQuantity(): number {
        return this.clients.length
    }

    public printClientBills(): void {
        this.clients.forEach( client => {
            const clientNumber = client.clientNumber
            const clientName = client.clientName
            const clientAccount = client.calculateBill()
            console.log(`${clientNumber} - ${clientName} - R$${clientAccount}`)
        });
    }

    public calculateAllIncome(): void {
        let allIncome: number = 0
        this.clients.forEach( client => {
            allIncome += client.calculateBill()
        });
        console.log(`Total a receber: R$${allIncome}`) 
    }
}