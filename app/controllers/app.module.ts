import { Module } from "../../system/decorator";
import { ExampleController } from "./example/example.controller";
import { PostController } from "./post/post.controller";
import { UserController } from "./user/user.controller";

@Module({
  controllers: [PostController, UserController, ExampleController],
})
export class AppModule {}
