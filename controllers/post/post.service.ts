import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { Auth } from "../../system/core";

const prisma = new PrismaClient();

export class PostService {
  constructor() {}
  /**
   * show all data
   */
  async index() {
    const result = await prisma.post.findMany();
    return result;
  }

  /**
   * show specific data
   * @param req
   * @param res
   */
  async show(arg_id: string) {
    const id = arg_id;
    const result = await prisma.post.findFirst({
      where: {
        id: Number(id),
      },
    });
    return result;
  }

  /**
   * store data
   * @param req
   * @param res
   */
  async store(req: Request, res: Response) {
    const title = req.body.title;
    const content = req.body.content;

    const user = Auth.get(req, res);

    const post = {
      title: title,
      content: content,
      authorId: user.userid,
    };

    const result = await prisma.post.create({
      data: post,
    });
  }
}
