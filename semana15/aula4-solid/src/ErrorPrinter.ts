export class ErrorPrinter {
    public onError(errorMessage: string, time: Date): void {
       throw new Error(`${errorMessage} - ${time}`)
    }
}