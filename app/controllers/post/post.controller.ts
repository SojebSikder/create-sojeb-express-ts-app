import { Request, Response } from "express";
import { Controller, Get, Post } from "../../../system/decorator";
import { env } from "../../../system/util";
import { decorateHtmlResponse } from "../../middlewares/common/decorateHtmlResponse";
import { PostService } from "./post.service";

@Controller("/")
export class PostController {
  //
  @Get("", { middleware: [decorateHtmlResponse()] })
  async index(req: Request, res: Response) {
    const result = await PostService.getInstance().index();
    res.render("index", { posts: result });
  }

  @Post("post/add", { middleware: [decorateHtmlResponse()] })
  async store(req: Request, res: Response) {
    await PostService.getInstance().store(req, res);

    res.render("post/addPost", {
      message: "Post has been added successfully",
    });
  }

  @Get("post/add", { middleware: [decorateHtmlResponse()] })
  showAddPostPage(req: Request, res: Response) {
    res.render("post/addPost", {
      message: "",
    });
  }

  @Get("post/:id", { middleware: [decorateHtmlResponse()] })
  async show(req: Request, res: Response) {
    const id = req.params.id;
    const result = await PostService.getInstance().show(id);
    res.locals.title = `${result.title} - ${env("APP_NAME")}`;
    res.render("post/postSingle", { post: result });
  }
}
