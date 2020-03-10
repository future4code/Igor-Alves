import knex from "knex";
import { User } from "../business/entities/user";

export class UserDB {
  private connection = knex({
    client: "mysql",
    connection: {
      host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
      port: 3306,
      user: "igor",
      password: "I84eG3HJ3w!iGDg3TLYH",
      database: `bouman-igor`
    }
  });

  private userTableName = "clients";

  private mapDateToDbDate(input: Date): string {
    const year = input.getFullYear();
    const month = input.getMonth() + 1;
    const date = input.getDate();
    return `${year + "-" + month + "-" + date}`;
  }

  private mapDbDateToDate(input: string): Date {
    return new Date(input);
  }

  private mapDbUserToUser(input?: any): User | undefined {
    return (
      input &&
      new User(
        input.id,
        input.name,
        input.email,
        this.mapDbDateToDate(input.birthDate)
      )
    );
  }

  public async createUser(user: User): Promise<void> {
    await this.connection.raw(`
INSERT INTO ${this.userTableName} (id, name, email, birthDate) 
VALUES(
	'${user.getId()}',
	'${user.getName()}',
	'${user.getEmail()}',
  STR_TO_DATE('${this.mapDateToDbDate(user.getBirthDate())}', '%Y-%m-%d')
);
    `);
  }

  public async getUserById(id:string): Promise<User | undefined> {
    const result = await this.connection.raw(
      `SELECT * FROM ${this.userTableName} WHERE id='${id}'`
    )

    if(!result[0][0]) {
      return undefined
    }

    return new User(
      result[0][0].id,
      result[0][0].name,
      result[0][0].email,
      new Date(result[0][0].birthDate)
    )
  }

  public async getAllUsers(): Promise<User[]> {
    const result = await this.connection.raw(
      `SELECT * FROM ${this.userTableName}`
    );

    return result[0].map((res: any) => this.mapDbUserToUser(res)!);
  }

  public async updateUser(user: User): Promise<void> {
    await this.connection.raw(`
    UPDATE ${this.userTableName}
    SET 
      name='${user.getName()}',
      email='${user.getEmail()}',
      birthDate=STR_TO_DATE('${this.mapDateToDbDate(
        user.getBirthDate()
      )}', '%Y-%m-%d')
    WHERE id='${user.getId()}';
    `);
  }

  public async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await this.connection.raw(
      `SELECT * FROM ${this.userTableName} WHERE email = '${email}'`
    )

    if(result[0][0] === undefined) {
      return undefined
    }

    return this.mapDbUserToUser(result[0][0])
  }

  public async deleteUser(id: string): Promise<void>{
    await this.connection.raw(
      `DELETE FROM ${this.userTableName} WHERE id = '${id}'`
    );
  }
}
