import { Module } from "../../system/decorator";
import { PostController } from "./post/post.controller";
import { UserController } from "./user/user.controller";

@Module({
  controllers: [PostController, UserController],
})
export class AppModule {}
