import { Module } from "../../system/decorator";
import { ExampleController } from "./example/example.controller";

@Module({
  controllers: [ExampleController],
})
export class AppModule {}
