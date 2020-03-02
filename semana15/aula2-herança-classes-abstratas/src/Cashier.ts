import { Employee } from "./Employee";
import { Dish } from './dish'
import { bills } from './index'

export class Cashier extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary);
    }

    public sayJob(): void {
        console.log("Eu sou Caixa")
    }

    public calculateBill(consumption: Dish[]): void {
        let totalBill: number = 0
        consumption.forEach(dish => {
            totalBill += dish.getPrice()
        });

        bills.push(totalBill)
    }
}
