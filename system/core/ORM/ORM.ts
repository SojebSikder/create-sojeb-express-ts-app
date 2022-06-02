import { DB } from "../../database/facade/DB";
import { arrayToString } from "../../helper/ArrayHelper";
import pluralize from "pluralize";

export class ORM {
  private static _instance = null;

  /**
   * The table associated with the model.
   *
   * @var string
   */
  public _table;

  constructor() {
    this._table = pluralize(this._table.toLowerCase(), 2, true);
  }

  private static getInstance() {
    if (this._instance === null) {
      this._instance = new this();
      return this._instance;
    }
  }

  /**
   * Fetch all data
   */
  public static all(columns = ["*"]) {
    this.getInstance();
    let column;
    if (Array.isArray(columns)) {
      column = arrayToString(columns);
    } else {
      column = columns;
    }

    const data = DB.select(`select $column from ${this.getInstance()._table}`);

    return data;
  }
}
