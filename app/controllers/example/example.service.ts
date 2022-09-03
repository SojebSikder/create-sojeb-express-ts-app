import { Data } from "../../models/Data";

export class ExampleService {
  private static _instance: ExampleService;

  /**
   * Create instance
   */
  public static getInstance() {
    if (!this._instance) {
      this._instance = new this();
    }
    return this._instance;
  }

  /**
   * show all data
   */
  public async findAll() {
    const data = new Data().all();
    return data;
    // return "Hello world";
  }
}
