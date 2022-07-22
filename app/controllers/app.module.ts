import { Module } from "../../system/src/core/decorator";
import { ExampleController } from "./example/example.controller";

@Module({
  controllers: [ExampleController],
})
export class AppModule {}
