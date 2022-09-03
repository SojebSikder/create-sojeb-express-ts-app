import { env, Sorm } from "../../system/src";
import { Module } from "../../system/src/core/decorator";
import { ExampleController } from "./example/example.controller";

@Module({
  imports: [
    Sorm.config({
      driver: "mysql",
      connection: { databaseUrl: env("DATABASE_URL") },
    }),
  ],
  controllers: [ExampleController],
})
export class AppModule {}
