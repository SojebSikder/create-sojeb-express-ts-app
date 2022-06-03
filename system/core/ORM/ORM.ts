import { DB } from "../../database/facade/DB";
import { arrayToString } from "../../helper/ArrayHelper";

export class ORM {
  /**
   * The table associated with the model.
   *
   * @var string
   */
  public table;

  constructor(table) {
    this.table = table.toLowerCase();
  }

  /**
   * Fetch all data
   */
  public all = async (columns = ["*"]) => {
    let column;
    if (Array.isArray(columns)) {
      column = arrayToString(columns);
    } else {
      column = columns;
    }
    const data = await DB.select(`select ${column} from ${this.table}`);
    return data;
  };
}
