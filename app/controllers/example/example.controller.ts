import { Request, Response } from "express";
import { Controller, Get } from "../../../system/decorator";
import { helloWorld } from "../../middlewares/helloWorld";

@Controller("/example/")
export class ExampleController {
  @Get("")
  async index(req: Request, res: Response) {
    res.send("Hello world from example");
  }
  @Get("user/store")
  async store(req: Request, res: Response) {
    res.send("Hello world from example store");
  }
  @Get("user/show/:id")
  async show(req: Request, res: Response) {
    res.send("Hello world from example show");
  }
}
