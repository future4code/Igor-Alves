import { Transaction } from './Transaction'
import * as moment from 'moment'
moment.locale('pt-br')


export class UserAccount {
    private name: string
    private cpf: string
    private age: number
    private balance: number
    private transactions: Transaction[]

    constructor(name: string, cpf: string, birthDay: string){
        this.name = name
        this.cpf = cpf
        this.age = this.verifyAge(birthDay)
        this.balance = 0
        this.transactions = []
    }

    verifyAge(birthDay: string):number {
        const userBirthday: moment.Moment = moment(birthDay, 'DD/MM/YYYY')
        const today: moment.Moment =  moment()
        const userAge: number = today.diff(userBirthday, 'years')
        return userAge
    } 

    getBalance():number {
        return this.balance
    }

    addBalance(value: number): void {
        this.balance += value
    }
}