import { bootstrap } from "../../app/bootstrap";

type AppConfig = {
  port;
  cookieName;
  cookieSecret;
  /**
   * Application security.
   */
  security: {
    cors: {
      enable: true;
      options: {};
    };
    /**
     * Helmet helps you secure your Express apps by setting various HTTP headers.
     */
    helmet: {
      enable: true;
      options: {
        contentSecurityPolicy;
      };
    };
  };
};
type AuthConfig = {
  guards: {
    jwt: {
      secret;
      refresh_secret;
      expires;
    };
  };
};
type FileSystemConfig = {
  default;
  disks: {
    // default disk
    local: {
      driver;
      root;
    };
  };
};
type MailConfig = {
  mailers: {
    smtp: {
      host;
      port;
      encryption;
      username;
      password;
    };
  };

  /**
   * from address
   *
   */
  from: {
    address;
  };
};
type StaticConfig = {
  staticDir;
  engine: {
    enable;
    viewEngine;
    viewsDir;
  };
};
type Routes = (app) => void;
type Boot = (app) => void;

/**
 * System config
 */
export class System {
  public static appConfig: AppConfig;
  public static authConfig: AuthConfig;
  public static filesystemConfig: FileSystemConfig;
  public static mailConfig: MailConfig;
  public static staticConfig: StaticConfig;
  public static routes: Routes;
  public static boot: Boot;

  static setAppConfig(appConfig) {
    this.appConfig = appConfig;
  }

  static setAuthConfig(authConfig) {
    this.authConfig = authConfig;
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
export const filesystemConfig = System.filesystemConfig;
export const mailConfig = System.mailConfig;
export const staticConfig = System.staticConfig;
export const routes = System.routes;
export const boot = System.boot;
