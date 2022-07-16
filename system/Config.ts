import { appConfig as AppConfig } from "../config/app";
import { authConfig as AuthConfig } from "../config/auth";
import { dbConfig as DbConfig } from "../config/database";
import FileSystemConfig from "../config/filesystems";
import { mailConfig as MailConfig } from "../config/mail";
import { staticConfig as StaticConfig } from "../config/static";
import { routes as Routes } from "../routes/web";
import { boot as Boot } from "../app/app";

// map config from outside of core
export const appConfig = AppConfig;
export const authConfig = AuthConfig;
export const dbConfig = DbConfig;
export const filesystemConfig = FileSystemConfig;
export const mailConfig = MailConfig;
export const staticConfig = StaticConfig;
export const routes = Routes;
export const boot = Boot;
