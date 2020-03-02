import * as fs from 'fs'
import { UserAccount } from './userAccount'


export class JSONFileManager {
    private fileName: string

    constructor(database: string){
        this.fileName = database
    }

    getObjectFromFile():object {
        const fileData = JSON.parse(fs.readFileSync(this.fileName).toString())
        return new UserAccount(fileData.name, fileData.cpf, fileData.age)
    }

    writeObjectToFile(allAccounts: UserAccount[]): void {
        fs.writeFileSync(this.fileName, JSON.stringify(allAccounts))
    }
} 