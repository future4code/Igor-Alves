import { User } from "./User";
import moment = require("moment");
import { Specialty } from "./Specialty";


export class Teacher implements User { 
    constructor(public name: string, public mail: string, public birthDay: string, public specialty: Specialty) {}
}