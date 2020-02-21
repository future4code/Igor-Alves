import { Mission } from "./Mission";
import { Teacher } from "./Teacher";
import { Student } from "./Student";


export class WebMission extends Mission {
    constructor(public initialDate: string, public endDate: string, public teachers: Teacher[], public students: Student[], public patron: string){
        super(initialDate, endDate, teachers, students)
    }
}