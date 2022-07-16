import { Module } from "../../system/src/decorator";
import { ExampleController } from "./example/example.controller";

@Module({
  controllers: [ExampleController],
})
export class AppModule {}
