import { appConfig } from "../../config/app";
import { authConfig } from "../../config/auth";
import { Auth } from "bihongojs";
import { Module } from "bihongojs";
import { ExampleController } from "./example/example.controller";

@Module({
  imports: [
    // Config for Simple implementation of jwt auth. You can remove it or use it
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
