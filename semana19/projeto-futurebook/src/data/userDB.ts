import { UserGateway } from "../business/gateways/userGateway";
import { BaseDB } from "./baseDB";
import { User } from "../business/entities/user";


export class UserDB extends BaseDB implements UserGateway {
  private userTableName = "FUTUREBOOK_USERS";

  public async createUser(user: User): Promise<void> {
    await this.connection.raw(`
      INSERT INTO ${this.userTableName} (id, name, email, password) 
      VALUES(
        '${user.getId()}',
        '${user.getName()}',
        '${user.getEmail()}',
        '${user.getPassword()}'
      );`
    )
  }

  public async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await this.connection.raw(
      `SELECT * FROM ${this.userTableName} WHERE email='${email}'`
    );

    if (!result[0][0]) {
      return undefined
    }

    return new User(result[0][0].id, result[0][0].name, result[0][0].email, result[0][0].password);
  }
}