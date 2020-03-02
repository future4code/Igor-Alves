import { Bank } from './Bank'


const myBank = new Bank()

myBank.createAccount(process.argv[4], process.argv[5], process.argv[6])

const ble = myBank.getAllAccounts()
console.log(ble)