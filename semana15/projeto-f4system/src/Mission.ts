import { Student } from "./Student";
import { Teacher } from "./Teacher";


export abstract class Mission {
    constructor(public initialDate: string, public endDate: string, public teachers: Teacher[], public students: Student[]){}
}