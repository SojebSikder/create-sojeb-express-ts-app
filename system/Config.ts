// import { appConfig as AppConfig } from "../config/app";
// import { authConfig as AuthConfig } from "../config/auth";
// import { dbConfig as DbConfig } from "../config/database";
// import FileSystemConfig from "../config/filesystems";
// import { mailConfig as MailConfig } from "../config/mail";
// import { staticConfig as StaticConfig } from "../config/static";
// import { routes as Routes } from "../routes/web";
// import { boot as Boot } from "../app/app";

import { bootstrap } from "../app/bootstrap";


// map config from outside of core
// export const appConfig = AppConfig;
// export const authConfig = AuthConfig;
// export const dbConfig = DbConfig;
// export const filesystemConfig = FileSystemConfig;
// export const mailConfig = MailConfig;
// export const staticConfig = StaticConfig;
// export const routes = Routes;
// export const boot = Boot;

/**
 * System config
 */
export class System {
  public static appConfig;
  public static authConfig;
  public static dbConfig;
  public static filesystemConfig;
  public static mailConfig;
  public static staticConfig;
  public static routes;
  public static boot;

  static setAppConfig(appConfig) {
    this.appConfig = appConfig;
  }

  static setAuthConfig(authConfig) {
    this.authConfig = authConfig;
  }

  static setDbConfig(dbConfig) {
    this.dbConfig = dbConfig;
  }

  static setFileSystemConfig(filesystemConfig) {
    this.filesystemConfig = filesystemConfig;
  }

  static setMailConfig(mailConfig) {
    this.mailConfig = mailConfig;
  }

  static setStaticConfig(staticConfig) {
    this.staticConfig = staticConfig;
  }

  static setRoutes(routes) {
    this.routes = routes;
  }

  static setBoot(boot) {
    this.boot = boot;
  }
}

bootstrap();

// map config from outside of core
export const appConfig = System.appConfig;
export const authConfig = System.authConfig;
export const dbConfig = System.dbConfig;
export const filesystemConfig = System.filesystemConfig;
export const mailConfig = System.mailConfig;
export const staticConfig = System.staticConfig;
export const routes = System.routes;
export const boot = System.boot;
