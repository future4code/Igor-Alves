import { WebMission } from "./WebMission";
import { Teacher } from "./Teacher";
import { Specialty } from "./Specialty";
import { Student } from "./Student";


const darvas = new Teacher('Darvas', 'darvas@future4.com', '15/08/1996', Specialty.Redux)

const bouman = new WebMission('28/10/2019', '22/05/2020', [], [], 'Alan Turring')

const alan = new Student('Alan', 'alan@gmail.com', '23/06/1954', bouman)


console.log(bouman)
console.log(darvas)
console.log(alan)