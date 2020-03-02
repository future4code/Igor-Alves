import { Cashier } from "./Cashier";
import { Chef } from './Chef'
import { employees } from './index'


export class Manager extends Cashier {
    constructor(name: string, salary: number) {
        super(name, salary);
    }

    public sayJob(): void {
        console.log("Eu sou Gerente")
    }

    public hireEmployee(name: string, salary: number, job: string): void {
        switch(job){
            case 'chef':
               const newChef = new Chef(name, salary)
               employees.push(newChef)
            break
            case 'cashier':
                const newCashier = new Cashier(name, salary)
                employees.push(newCashier)
            break
            case 'manager':
                const newManager = new Manager(name, salary)
                employees.push(newManager)
            break
        }
    }

    public dismissEmployee(empployeeToRemove: string): void {
        employees.map( empployee => {
            if(empployee.getName() === empployeeToRemove){
                employees.splice(employees.indexOf(empployee), 1)
            }
        })
    }
}