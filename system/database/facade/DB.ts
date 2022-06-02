import { Model } from "../../core/Model";

/**
 * DB facade
 */
export class DB extends Model {
  /**
   *
   * @var DB
   */
  private static instance: DB;

  constructor() {
    super();
  }

  private static getInstance(): DB {
    if (this.instance === null) {
      this.instance = new this();
    }
    return this.instance;
  }
  /**
   * Select query
   */
  public static select(query) {
    return this.getInstance().db.select(query);
  }

  /**
   * SelectOne query
   */
  public static selectOne(query) {
    return this.getInstance().db.selectOne(query);
  }

  /**
   * insert query
   */
  public static insert(query) {
    return this.getInstance().db.insert(query);
  }

  /**
   * update query
   */
  public static update(query) {
    return this.getInstance().db.update(query);
  }

  /**
   * delete query
   */
  public static delete(query) {
    return this.getInstance().db.delete(query);
  }

  /**
   * Statement query
   */
  public static statement(query) {
    return this.getInstance().db.statement(query);
  }
}
