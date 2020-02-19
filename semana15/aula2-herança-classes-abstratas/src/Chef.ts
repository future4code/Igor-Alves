import { Employee } from "./Employee";
import { Dish } from './dish'
import { dishMenu } from './index'
import { Dessert } from "./dessert";
import { SaltyDish } from "./SaltyDish";


export class Chef extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary);
    }

    public sayJob(): void {
        console.log("Eu sou Chef")
    }

    public removeDishFromMenu(dishToRemove: string): void {
        dishMenu.map( dish => {
            if(dish.getName() === dishToRemove){
                dishMenu.splice(dishMenu.indexOf(dish), 1)
            }
        })
    }

    public addDishToMenu(name: string, price: number, cost: number, ingredients: string[], timeToCook: number, slicesNumber?: number | undefined): void {
        if (slicesNumber === undefined) {
            const newDish: Dish = new SaltyDish(name, price, cost, ingredients, timeToCook)
            dishMenu.push(newDish)
        } else {
            const newDish: Dish = new Dessert(name, price, cost, ingredients, timeToCook, slicesNumber)
            dishMenu.push(newDish)
        }
    }
}