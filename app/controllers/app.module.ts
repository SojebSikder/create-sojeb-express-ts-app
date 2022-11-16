import { appConfig } from "../../config/app";
import { authConfig } from "../../config/auth";
import { Auth } from "../../system/src";
import { Module } from "../../system/src/core/decorator";
import { ExampleController } from "./example/example.controller";

@Module({
  imports: [
    Auth.config({
      cookieName: appConfig.cookieName,
      jwt: {
        expires: authConfig.guards.jwt.expires,
        refreshSecret: authConfig.guards.jwt.refresh_secret,
        secret: authConfig.guards.jwt.secret,
      },
    }),
  ],
  controllers: [ExampleController],
})
export class AppModule {}
