import { UserDB } from "../../data/userDataBase";

export class DeleteUserUC {
    constructor(private userDB: UserDB){}

    public async execute(input: DeleteUserUCInput): Promise<DeleteUserUCOutput> {
        const user = await this.userDB.deleteUser(input.id)

        if(input.id !== undefined) {
            if(input.id === "") {
                throw new Error("Invalid id")
            }

        }

        return {
            message: "User deleted sucessfully"
        }
    }
}

export interface DeleteUserUCInput {
    id: string,
}

export interface DeleteUserUCOutput {
    message: string
}