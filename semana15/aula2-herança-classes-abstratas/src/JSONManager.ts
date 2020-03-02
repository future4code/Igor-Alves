import { readFileSync, writeFileSync } from 'fs'

export class JSONManager {
    
    public ReadFileData(file: string): any {
        const fileData = JSON.parse(readFileSync(file).toString())
        return fileData
    }

    public writeDataInFile(file: string, data: any) {
        const fileContent = JSON.stringify(data)
        writeFileSync(file, fileContent)
    }
}
