import knex from "knex";

export abstract class BaseDatabase {
  private connectionData = {
    host: "<EMPTY>",
    port: 3306,
    user: "<EMPTY>",
    password: "<EMPTY>",
    database: "<EMPTY>"
  };

  protected connection = knex({
    client: "mysql",
    connection: this.connectionData
  });
}
