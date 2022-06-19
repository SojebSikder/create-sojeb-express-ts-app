import { Request, Response } from "express";
import { Controller, Get } from "../../../system/decorator";

@Controller("/")
export class ExampleController {
  /**
   * show all data
   * @param req
   * @param res
   */
  @Get("/")
  async index(req: Request, res: Response) {
    res.send("Hello world");
  }
}
