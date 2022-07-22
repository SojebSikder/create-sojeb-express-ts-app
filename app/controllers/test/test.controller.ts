import { Request, Response } from "express";
import { Controller, Delete, Get, Patch, Post } from "../../../system/src/core/decorator";
import { TestService } from "./test.service";
    
@Controller("/test/")
export class TestController {
  //
  @Post()
  async create(req: Request, res: Response) {
    return await TestService.getInstance().create(req.body);
  }

  @Get()
  async findAll(req: Request, res: Response) {
    return await TestService.getInstance().findAll();
  }

  @Get(':id')
  async findOne(req: Request, res: Response) {
    return await TestService.getInstance().findOne(req.params.id);
  }

  @Patch(':id')
  async update(req: Request, res: Response) {
    const id = req.params.id;
    const data = req.body;
    return await TestService.getInstance().update(id, data)
  }

  @Delete(':id')
  async remove(req: Request, res: Response) {
    return await TestService.getInstance().remove(req.params.id)
  }
}
 