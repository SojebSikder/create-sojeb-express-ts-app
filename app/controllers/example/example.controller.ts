import { Request, Response } from "express";
import { Controller, Get } from "../../../system/src/core/decorator";
import { decorateHtmlResponse } from "../../middlewares/common/decorateHtmlResponse";
import { helloWorld } from "../../middlewares/helloWorld";
import { ExampleService } from "./example.service";

@Controller("/", { middleware: [helloWorld("sojeb")] })
export class ExampleController {
  //
  @Get("", { middleware: [decorateHtmlResponse()] })
  async index(req: Request, res: Response) {
    res.render("index");
  }

  @Get("about")
  async show(req: Request, res: Response) {
    const data = await ExampleService.getInstance().findAll();
    res.json(data);
  }
}
