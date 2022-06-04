import { ORM } from "../system/core/ORM";

export class Data extends ORM {
  constructor() {
    // define table name
    super("data");
  }
}
