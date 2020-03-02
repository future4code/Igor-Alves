import { readFile } from 'fs'
import * as moment from 'moment'
moment.locale('pt-br')


const databasePath = './database.json'


type account = {
    name: string,
    cpf: string,
    birthDay: string,
    balance: number
    extract: expense[],
}

type expense = {
    value: number,
    date: string,
    description: string,
}

type accountsData = {
    clientsAccount: account[]
}

const getAllAccounts = async (): Promise<accountsData> => {
    const data = await readDatabase
    const allAccounts: accountsData = JSON.parse(data)
    return allAccounts
}


const readDatabase: Promise<string> = new Promise((resolve, reject) => {
    readFile(databasePath, (err: Error, data: Buffer) => {
        if(err){
            reject(err)
            return
        }
        resolve(data.toString())
    })
})


const getBalance = (name:string, cpf: string, accountList: accountsData) => {
    const client = accountList.clientsAccount.find( account =>
        (name === account.name && cpf === account.cpf)
    )

    if (client !== undefined){
        console.log(client.balance) 
    } else {
        console.log(`
        ----------------------------------------------------
        Nome e/ou CPF não batem com o cadastrado no sistema.
        ----------------------------------------------------`)
    }
}


const main = async () => {
    const accountList = await getAllAccounts()
    const name = process.argv[2]
    const cpf = process.argv[3]

    try{
        getBalance(name, cpf, accountList )
    } catch {
        console.log("Ocorreu um erro!")
    }
}

main()
