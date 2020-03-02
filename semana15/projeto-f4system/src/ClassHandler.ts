import { Teacher } from "./Teacher"
import { Student } from "./Student"
import { MobileMission } from "./MobileMission"
import { WebMission } from "./WebMission"

export class ClassCreatorHandler  {
    public execute(initialDate: string, endDate: string, teachers: Teacher[], students: Student[], classNumber?: number, patron?: string): void {
        if(classNumber !== undefined){
            const newClass = new MobileMission(initialDate, endDate, teachers, students, classNumber)
        } else if(patron !== undefined){
            const newClass = new WebMission(initialDate, endDate, teachers, students, patron)
        }
    }
}