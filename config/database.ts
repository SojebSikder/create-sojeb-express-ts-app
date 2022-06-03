import { env } from "../system/util";

export const dbConfig = {
  /**
   * Default database connection name
   */
  default: env("DB_CONNECTION", "mysql"),

  connection: {
    mysql: {
      driver: "mysql",
      url: env("DATABASE_URL"),
      host: env("DB_HOST", "127.0.0.1"),
      port: env("DB_PORT", "3306"),
      database: env("DB_DATABASE", "nodejs"),
      username: env("DB_USERNAME", "root"),
      password: env("DB_PASSWORD", ""),
    },
  },
};
