import { ORM } from "../system/core/ORM";

export class Data extends ORM {
  title: string;
  text: string;

  constructor() {
    // define table name
    super("data");
  }
}
