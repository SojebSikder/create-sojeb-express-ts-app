import { Request, Response } from "express";
import { Controller, Get, Post } from "../../../system/decorator";

@Controller("/user")
export class ExampleController {
  /**
   * show all data
   * @param req
   * @param res../../system/core
   */
  @Get("show")
  async index(req, res) {
    res.send("hello world");
  }

  @Post("info")
  async info(req, res) {
    res.send("hello info");
  }
}
