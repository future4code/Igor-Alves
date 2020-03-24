import * as bcrypt from 'bcrypt';

export class BcryptPassword {
    private saltOrRounds = 10

    async generateHash(userPassword: string) {
        return await bcrypt.hash(userPassword, this.saltOrRounds)
    }

    async compareHash(inputPassword: string, dbPassword: string) {
        return await bcrypt.compare(inputPassword, dbPassword);
    }
}