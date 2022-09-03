import { createClient } from "redis";

type Option = {
  host?: string;
  user?: string;
  port?: string;
  password?: string;
  dbname?: string;
  databaseUrl?: string;
};

/**
 * Redis adapter class
 * @class RedisAdapter
 * @author Sojeb Sikder <sojebsikder@gmail.com>
 */
export class RedisAdapter {
  // private host = dbConfig.connection.redis.default.host;
  // private user = dbConfig.connection.redis.default.username;
  // private password = dbConfig.connection.redis.default.password;
  // private dbname = dbConfig.connection.redis.default.database;
  // private port = dbConfig.connection.redis.default.port;

  private host;
  private user;
  private password;
  private dbname;
  private dbUrl;
  private port;

  public connection;
  public error;

  constructor() {}

  config(options: Option) {
    this.host = options.host;
    this.user = options.user;
    this.password = options.password;
    this.dbname = options.dbname;
    this.dbUrl = options.databaseUrl;
    this.port = options.port;
    this.connectDB();
  }

  public connectDB = async () => {
    // url: 'redis://alice:foobared@awesome.redis.server:6380'
    //redis[s]://[[username][:password]@][host][:port][/db-number]
    let _url = `redis://${this.user}:${this.password}@${this.host}:${this.port}`;

    if (this.dbUrl != null) {
      _url = `${this.dbUrl}`;
    } else {
      _url = `redis://${this.user}:${this.password}@${this.host}:${this.port}`;
    }

    this.connection = createClient({
      url: _url,
    });

    this.connection.on("error", (err) =>
      console.log("Redis Client Error", err)
    );

    await this.connection.connect();
  };

  /**
   * set key value pair
   * @param key
   * @param value
   * @returns
   */
  public async set(key, value) {
    return await this.connection.set(key, value);
  }

  /**
   * get key value pair
   * @param key
   * @returns
   */
  public async get(key) {
    return await this.connection.get(key);
  }
}
