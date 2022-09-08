import { StorageClass } from "./Disk/StorageClass";
import { LocalAdapter } from "./Disk/drivers/LocalAdapter";
import { DiskOption } from "./Disk/Option";

/**
 * Storage class for handling storage
 * @class Storage
 * @author Sojeb Sikder <sojebsikder@gmail.com>
 */
export class Storage {
  private static _config: DiskOption;

  /**
   * Storage configuration
   * @param config
   */
  public static config(config: DiskOption) {
    this._config = config;
  }

  /**
   * Specify disk name
   * @param disk
   * @returns
   */
  public static disk(disk: string): Storage {
    this._config.driver = disk;
    return this;
  }
  /**
   * store data
   * @param key
   * @param value
   * @returns
   */
  public static async put(key: string, value: any) {
    const disk = this.storageDisk();
    return disk.put(key, value);
  }

  /**
   * read data
   * @param key
   * @returns
   */
  public static async get(key: string) {
    const disk = this.storageDisk();
    return disk.get(key);
  }

  /**
   * delete data
   * @param key
   * @returns
   */
  public static async delete(key: string) {
    const disk = this.storageDisk();
    return disk.delete(key);
  }

  /**
   * process storage disk type
   * @returns
   */
  private static storageDisk() {
    const driver: string = this._config.driver;
    const config: DiskOption = this._config;

    let driverAdapter;
    switch (driver) {
      // for local filesystem
      case "local":
        driverAdapter = new LocalAdapter(config);
        break;

      // case "s3":
      //   driverAdapter = new S3Adapter();
      //   break;

      default:
        driverAdapter = new LocalAdapter(config);
        break;
    }
    return new StorageClass(driverAdapter);
  }
}
