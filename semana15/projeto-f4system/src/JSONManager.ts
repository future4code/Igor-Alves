import { readFileSync, writeFileSync } from 'fs'

export class JSONManager {
    constructor(public filePath: string){}

    public ReadFile(): any {
        const fileData = JSON.parse(readFileSync(this.filePath).toString())
        return fileData
    }

    public writeFile(data: any) {
        const fileContent = JSON.stringify(data, null, 2)
        writeFileSync(this.filePath, fileContent)
    }
}