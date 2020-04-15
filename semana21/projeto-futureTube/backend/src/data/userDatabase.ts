import { UserGateway } from "../business/gateways/userGateway";
import { BaseDatabase } from "./baseDatabase";
import { User } from "../business/entities/user";


export class UserDatabase extends BaseDatabase implements UserGateway {
  private userTableName = "users";

  public async createUser(user: User): Promise<void> {
    await this.connection.raw(`
      INSERT INTO ${this.userTableName} (id, name, email, password, birthDate, picture) 
      VALUES(
        '${user.getId()}',
        '${user.getName()}',
        '${user.getEmail()}',
        '${user.getPassword()}',
        '${user.getBirthDate()}',
        '${user.getPicture()}'
      );`
    )
  }
}