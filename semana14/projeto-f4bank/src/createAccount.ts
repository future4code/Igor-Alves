import { readFile, writeFile } from 'fs'
import * as moment from 'moment'
moment.locale('pt-br')

const databasePath = '../database.json' 

type account = {
    name: string,
    CPF: string,
    birthDay: moment.Moment,
    balance: number
    extract: expense[],
}

type expense = {
    value: number,
    date: moment.Moment,
    description: string,
}

type accountsData = {
    clientsAccount: account[]
}


const newAccount: account = {
    name: process.argv[2],
    CPF: process.argv[3],
    birthDay: moment(process.argv[4], 'DD/MM/YYYY'),
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


const createAccount = async () => {
    const accountList = await getAllAccounts()
    accountList.clientsAccount.push(newAccount);
    const allAccounts = JSON.stringify(accountList);
    
    const putClientsData: Promise<void> = new Promise((resolve, reject) => {
        writeFile(databasePath, allAccounts, 'utf8', (err) => {
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
    const currentDate: moment.Moment = moment().utcOffset('-0300')
    const clientBirthDay: moment.Moment = newAccount.birthDay.utcOffset('-0300')
    const diffInYears: number = currentDate.diff(clientBirthDay, "years")
    
    if(diffInYears >= 18) {
        return true
    } else {
        console.log(`
        -------------------------------------------------------------------
        O cliente precisa ter idade maior que 18 anos para abrir uma conta.
        -------------------------------------------------------------------
        `)
        return false
    }
}


const verifyUniqueCPF = async () => {
    let uniqueCPF: boolean
    const accountList = await getAllAccounts()

    accountList.clientsAccount.forEach( account => {
        const databaseCPF: number = Number(account.CPF.replace(/\D+/g, ''))
        const clientCPF: number = Number(process.argv[3].replace(/\D+/g, ''))
        
        if(clientCPF === databaseCPF){
            uniqueCPF = true
        }else{
            uniqueCPF = false
        }
    })

    if (uniqueCPF === false){
        console.log(`
        ----------------------------------------
        Esse CPF já possui uma conta cadastrada.
        ----------------------------------------`)
    }
    return uniqueCPF
}


const main = async() => {
    if (verifyIsAdult()) {
        createAccount()
    }
}

main()



