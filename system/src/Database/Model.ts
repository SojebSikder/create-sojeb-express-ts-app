import { Builder } from "./Builder";
import { Dbase } from "./database/Dbase";
import { Sorm } from "./Sorm";

type Option = {
  /**
   * set database driver
   */
  driver?: string;
  connection: {
    host?: string;
    user?: string;
    password?: string;
    dbname?: string;
    databaseUrl?: string;
  };
};
/**
 * Model class
 * @class Model
 * @extends {Builder}
 * @author Sojeb Sikder <sojebsikder@gmail.com>
 */
export class Model extends Builder {
  /**
   * db property
   */
  public static db: Dbase;

  constructor() {
    super();
    this.config(Sorm.getConfig());
    this.db = this.DBSwitcher();
  }

  /**
   * Switching database driver
   */
  public DBSwitch({
    toggle = false,
    options,
  }: {
    toggle?: boolean;
    options: Option;
  }) {
    this.config(Sorm.getConfig());
    return this.DBSwitcher(toggle);
  }
}
