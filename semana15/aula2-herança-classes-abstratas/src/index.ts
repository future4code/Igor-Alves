import { Dish } from './dish'
import { Dessert } from './dessert'
import { SaltyDish } from './saltydish'
import { Employee } from './Employee'
import { Cashier } from './Cashier'
import { Manager } from './Manager'
import { Chef } from './Chef'
import { JSONManager } from './JSONManager'



const carbonara = new SaltyDish('carbonara', 30, 15, ['ovos', 'macarrão', 'creme de leite', 'bacon', 'queijo'], 15)

const crispyShrimp = new SaltyDish('crispyShrimp', 60, 30, ['camarão', 'farinha de trigo', 'ovo', 'limão'], 30)

const brigadeiro = new Dessert('brigadeiro', 40, 20, ['leite consensado', 'chocolate em pó', 'margarina'], 25, 30 )

const passionFruitMousse = new Dessert('passionFruitMousse', 50, 25, ['leite condensado', 'suco de maracujá', 'creme de leite'], 5, 6)


export const dishMenu: Dish[] = [carbonara, crispyShrimp, brigadeiro, passionFruitMousse]

const clientConsumption: Dish[] = [crispyShrimp, passionFruitMousse]



const bestCashier: Cashier = new Cashier('Fulano', 4000)

const bestManager: Manager = new Manager('Ciclano', 8000)

const masterChef: Chef = new Chef('Beltrano', 15000)


masterChef.addDishToMenu('Bolo de chocolate', 50, 25, ['chocolate', 'trigo', 'ovo', 'fermento'], 25, 25)

masterChef.removeDishFromMenu('brigadeiro')

console.log('Numero de Funcionários:', Employee.numberOfEmployees)



// Desafios 

const fileManager: JSONManager = new JSONManager()

console.log(fileManager.ReadFileData('./database.json'))

fileManager.writeDataInFile('./database.json', dishMenu)

export const employees: Employee[] = [bestCashier, bestManager, masterChef]


bestManager.hireEmployee('Igor', 4000, 'chef')

bestManager.dismissEmployee('Beltrano')


export const bills: number [] = []


bestManager.calculateBill(clientConsumption)
