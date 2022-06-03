import mysql from "mysql";

import env from "../../util/env";
import { IAdapter } from "./iAdapter";

export class MySQLAdapter implements IAdapter {
  public host = env("DB_HOST");
  public user = env("DB_USER");
  public pass = env("DB_PASS");
  public dbname = env("DB_NAME");

  public connection;
  public error;

  public __construct() {
    this.connectDB();
  }

  private connectDB() {
    this.connection = mysql.createConnection({
      host: this.host,
      user: this.user,
      password: this.pass,
      database: this.dbname,
    });

    this.connection.connect(function (err) {
      if (err) {
        this.error = err;
        throw err;
      }
      console.log("Connected!");
    });
  }

  // Select or Read data
  public select(query) {
    this.connection.query(query, function (err, result) {
      if (err) {
        throw err;
      }
      if (result.length > 0) {
        return result;
      } else {
        return false;
      }
    });
  }

  // Select or Read data
  public selectOne(query) {
    this.connection.query(query, function (err, result) {
      if (err) {
        throw err;
      }
      if (result.length > 0) {
        return result[0];
      } else {
        return false;
      }
    });
  }

  // // Insert data
  public insert(query) {
    this.connection.query(query, function (err, result) {
      if (err) {
        throw err;
      }
      return result;
    });
  }

  // Update data
  public update(query) {
    this.connection.query(query, function (err, result) {
      if (err) throw err;
      return result;
    });
  }

  // Delete data
  public delete(query) {
    this.connection.query(query, function (err, result) {
      if (err) throw err;
      return result;
    });
  }

  // query statement data
  public statement(query) {
    this.connection.query(query, function (err, result) {
      if (err) throw err;
      return result;
    });
  }
}

// module.exports = MySQLAdapter;
