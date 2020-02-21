export interface ErrorTracker {
    onError(errorMessage: string, date: Date): void 
}