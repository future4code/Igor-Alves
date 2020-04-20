import { UserGateway } from "../business/gateways/userGateway";
import { BaseDatabase } from "./baseDatabase";
import { User } from "../business/entities/user";


export class UserDatabase extends BaseDatabase implements UserGateway {
  private userTableName = "users";

  private mapDBDataToUser(input: any): User {
    return new User(
      input.id, 
      input.name, 
      input.email, 
      input.password, 
      input.birthDate, 
      input.picture
    )
  }

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
      );
    `)
  }

  public async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await this.connection.raw(`
      SELECT * 
      FROM ${this.userTableName}
      WHERE email = '${email}';
    `)

    return result[0][0] && this.mapDBDataToUser(result[0][0])
  }

  public async getUserById(id: string): Promise<User | undefined> {
    const result = await this.connection.raw(`
      SELECT * 
      FROM ${this.userTableName}
      WHERE id = '${id}';
    `)

    return result[0][0] && this.mapDBDataToUser(result[0][0])
  }

  public async updatePassword(newPassword: string, userId: string): Promise<void> {
    await this.connection.raw(`
      UPDATE ${this.userTableName} 
      SET password = '${newPassword}'
      WHERE id = '${userId}';
    `)
  }
}