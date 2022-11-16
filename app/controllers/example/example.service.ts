import { Dinjectable } from "bihongojs";

class Database {
  do() {
    console.log("db initiated...");
  }
}
@Dinjectable()
export class ExampleService {
  constructor(private database: Database) {}

  public findAll() {
    this.database.do();
    return "Hello world";
  }
}
