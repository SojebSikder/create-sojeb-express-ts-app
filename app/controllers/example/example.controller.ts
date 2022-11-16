import { Request, Response } from "express";
import { Dinjectable } from "bihongojs";
import { Controller, Get } from "bihongojs";
import { decorateHtmlResponse } from "../../middlewares/common/decorateHtmlResponse";
import { helloWorld } from "../../middlewares/helloWorld";
import { ExampleService } from "./example.service";

@Dinjectable()
@Controller("/", { middleware: [helloWorld("sojeb")] })
export class ExampleController {
  constructor(private exampleService: ExampleService) {}
  //
  @Get("", { middleware: [decorateHtmlResponse()] })
  index(req: Request, res: Response) {
    res.render("index");
  }

  @Get("data")
  findAll(req: Request, res: Response) {
    const data = this.exampleService.findAll();
    res.json(data);
  }
}
