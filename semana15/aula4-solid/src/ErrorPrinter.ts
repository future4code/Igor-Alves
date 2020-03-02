import { ErrorTracker } from "./ErrorTracker";

export class ErrorPrinter implements ErrorTracker{
    public onError(errorMessage: string, time: Date): void {
       throw new Error(`${errorMessage} - ${time}`)
    }
}