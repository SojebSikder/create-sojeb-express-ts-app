import { ORM } from "../system";

export class Data extends ORM {
  title: string;
  text: string;

  // define custom table name like this:
  // constructor() {
  //   super("table_name");
  // }
}
