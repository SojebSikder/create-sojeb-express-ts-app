import { Module } from "../../system/decorator";
import { ExampleController } from "./example/example.controller";
import { PostController } from "./post/post.controller";

@Module({
  controllers: [PostController, ExampleController],
})
export class AppModule {}
