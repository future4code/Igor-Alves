import { ErrorTracker } from "./ErrorTracker";
import { Error } from "./Error";
import { JSONManager } from "./JSONManager";

export class ErrorLogger implements ErrorTracker{
    public onError(errorMessage: string, date: Date): void {
       const error = new Error(errorMessage, date)
       const fileManager = new JSONManager('./database.json')
       const database = fileManager.ReadFile()
       database.errors.push(error)
       fileManager.writeFile(database)
    }
}

