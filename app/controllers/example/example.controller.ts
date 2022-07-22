import { Request, Response } from "express";
import { Controller, Get } from "../../../system/src/core/decorator";
import { decorateHtmlResponse } from "../../middlewares/common/decorateHtmlResponse";
import { ExampleService } from "./example.service";

@Controller()
export class ExampleController {
  //
  @Get("", { middleware: [decorateHtmlResponse()] })
  async index(req: Request, res: Response) {
    res.render("index");
  }

  @Get("about")
  async show(req: Request, res: Response) {
    const data = await ExampleService.getInstance().index();
    res.send(data);
  }
}
