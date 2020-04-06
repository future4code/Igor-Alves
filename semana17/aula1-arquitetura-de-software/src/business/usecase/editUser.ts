import { UserDB } from "../../data/userDataBase";

export class EditUserUC {
    constructor(private userDB: UserDB){}

    public async execute(input: EditUserUCInput): Promise<EditUserUCOutput> {
        const user = await this.userDB.getUserById(input.id)

        if(!user) {
            throw new Error("User not found")
        }

        if(input.name !== undefined) {
            if(input.name === "") {
                throw new Error("Invalid name")
            }

            user.setName(input.name)
        }

        if(input.email !== undefined) {
            if(input.email.indexOf("@") === -1) {
                throw new Error("Invalid email")
            }

            user.setEmail(input.email)
        }

        await this.userDB.updateUser(user)

        return {
            message: "User updated sucessfully"
        }
    }
}

export interface EditUserUCInput {
    id: string,
    name: string,
    email: string,
}

export interface EditUserUCOutput {
    message: string
}