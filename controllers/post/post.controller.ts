import { Request, Response } from "express";
import { env } from "../../system/util";
import { PostService } from "./post.service";

export class PostController {
  constructor(private postService: PostService) {}
  /**
   * show all data
   * @param req
   * @param res
   */
  index = async (req: Request, res: Response) => {
    const result = await this.postService.index();
    res.render("index", { posts: result });
  };

  /**
   * show specific data
   * @param req
   * @param res
   */
  show = async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await this.postService.show(id);
    res.locals.title = `${result.title} - ${env("APP_NAME")}`;
    res.render("post/postSingle", { post: result });
  };

  /**
   * store data
   * @param req
   * @param res
   */
  store = async (req: Request, res: Response) => {
    await this.postService.store(req, res);

    res.render("post/addPost", {
      message: "Post has been added successfully",
    });
  };

  /**
   * show add post page
   * @param req
   * @param res
   */
  showAddPostPage(req: Request, res: Response) {
    res.render("post/addPost", {
      message: "",
    });
  }
}
