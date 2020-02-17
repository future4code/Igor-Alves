import { JSONFileManager } from "./JSONFileManager"
import { UserAccount } from "./userAccount"

export class Bank {
    private accounts: UserAccount[]
    private fileManager: JSONFileManager

    constructor() {
        this.accounts = this.getAllAccounts()
        this.fileManager = new JSONFileManager('database.json')
    }

    createAccount(name: string, cpf: string, birthday: string): void {
       this.accounts.push(new UserAccount(name, cpf, birthday))
       console.log(this.accounts)
       this.fileManager.writeObjectToFile(this.accounts)
    }

    getAllAccounts(): UserAccount[] {
        console.log(this.fileManager)
        const AllAccounts = this.fileManager.getObjectFromFile()
        return AllAccounts
    }

    getAccountsByCpf(): UserAccount {
        return 
    }

    saveAccounts(): void {

    }
}