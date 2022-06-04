import { DB } from "../../database/facade/DB";
import { arrayToString, arrayToStringWithQ } from "../../helper/ArrayHelper";

export class ORM {
  /**
   * The table associated with the model.
   *
   * @var string
   */
  public table;

  private whereC = null;

  constructor(table) {
    this.table = table.toLowerCase();
  }

  /**
   * insert data
   */
  public insert = async (objectData = {}) => {
    let keys, values;

    keys = arrayToString(Object.keys(objectData));
    values = arrayToStringWithQ(Object.values(objectData));

    const data = await DB.insert(
      `insert ${this.table} (${keys}) values (${values})`
    );
    return data;
  };

  /**
   * where clause
   */
  public where(key, value) {
    if (this.whereC == null) {
      this.whereC = `where ${key} = '${value}'`;
    } else {
      this.whereC += ` and ${key} = '${value}'`;
    }
    return this;
  }

  /**
   * Or where clause
   */
  public orWhere(key, value) {
    if (this.whereC == null) {
      this.whereC = `where ${key} = '${value}'`;
    } else {
      this.whereC += ` or ${key} = '${value}'`;
    }
    return this;
  }

  /**
   * Fetch query data
   */
  public get(columns = ["*"]) {
    const column = arrayToString(columns);
    const data = DB.select(
      `select ${column} from ${this.table} ${this.whereC}`
    );

    return data;
  }
  /**
   * fetch all data
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
