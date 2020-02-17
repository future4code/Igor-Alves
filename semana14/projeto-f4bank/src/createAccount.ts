import { readFile, writeFile } from 'fs'
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


const newAccount: account = {
    name: process.argv[2],
    cpf: process.argv[3],
    birthDay: moment(process.argv[4], 'DD/MM/YYYY').format('DD/MM/YYYY'),
    balance: 0,
    extract: [],
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


const createAccount = async (accountList: accountsData) => {
    accountList.clientsAccount.push(newAccount);
    const allAccounts = JSON.stringify(accountList);
    
    const putClientsData: Promise<void> = new Promise((resolve, reject) => {
        writeFile(databasePath, allAccounts, (err) => {
            if(err){
                reject(err)
                return
            }
            resolve(console.log(`
            -------------------------
            Conta criada com sucesso!
            -------------------------`))
            return
        })
    })
}


const verifyIsAdult = (): boolean => {
    const currentDate: moment.Moment = moment()
    const clientBirthDay: moment.Moment = moment(newAccount.birthDay, 'DD/MM/YYYY')
    const diffInYears: number = currentDate.diff(clientBirthDay, "years")

    if(diffInYears >= 18) {
        return true
    } else {
        console.log(`
        -------------------------------------------------------------------
        O cliente precisa ter idade maior que 18 anos para abrir uma conta.
        -------------------------------------------------------------------`)
        return false
    }
}


const verifyUniqueCPF = (accountList: accountsData): boolean => {
    let uniqueCPF: boolean

    if(accountList.clientsAccount.length !== 0){
        accountList.clientsAccount.forEach( account => {
            const databaseCPF: number = Number(account.cpf.replace(/\D+/g, ''))
            const clientCPF: number = Number(process.argv[3].replace(/\D+/g, ''))
    
            if(clientCPF !== databaseCPF){
                uniqueCPF = true
            }else{
                console.log(`
                ----------------------------------------
                Esse CPF já possui uma conta cadastrada.
                ----------------------------------------`)
                uniqueCPF = false
            }
        })
    } else{
        uniqueCPF = true
    }

    return uniqueCPF
}


const main = async () => {
    const accountList = await getAllAccounts()

    try {
        const adult = verifyIsAdult();
        const uniqueCPF = verifyUniqueCPF(accountList);

        if(adult && uniqueCPF){
            createAccount(accountList)
        }
    } catch {
        console.log("Ocorreu um erro!")
    }
}


main()


