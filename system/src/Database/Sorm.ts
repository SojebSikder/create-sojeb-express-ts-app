import { ORM } from "./ORM";

type SormOption = {
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
 * Sorm class
 * @class Model
 * @extends {Builder}
 * @author Sojeb Sikder <sojebsikder@gmail.com>
 */
export class Sorm {
  private static _config;
  static config(options: SormOption) {
    this._config = options;
  }
  static getConfig() {
    return this._config;
  }
}
