export abstract class Employee {
    protected name: string;
    protected salary: number;
    static numberOfEmployees: number = 0

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
        Employee.numberOfEmployees += 1
    }

    public abstract sayJob(): void;
}