import { Option } from "./Option";

/**
 * Sorm class - A simple ORM
 * @class Model
 * @author Sojeb Sikder <sojebsikder@gmail.com>
 */
export class Sorm {
  private static _config;
  static config(options: Option) {
    this._config = options;
  }
  static getConfig() {
    return this._config;
  }
}
