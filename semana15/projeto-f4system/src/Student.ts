import { User } from "./User";
import moment = require("moment");
import { Mission } from "./Mission";


export class Student implements User { 
    constructor(public name: string, public mail: string, public birthDay: string, public courseClass: Mission) {}
}