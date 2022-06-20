// external imports
import { Express, Request, Response } from "express";
// internal imports
import postRouter from "./postRouter";
import userRouter from "./userRouter";
// middleware
import { decorateHtmlResponse } from "../app/middlewares/common/decorateHtmlResponse";
import { RouterResolver } from "../system";
import { AppModule } from "../app/controllers/app.module";

/**
 * Init all routes
 * @param {*} app
 */
export function routes(app: Express) {
  // Initialize modules
  new AppModule();
  // Initialize router
  RouterResolver.resolve(app);

  /**
   * User custom router here
   */
  // app.use(postRouter);
  // app.use(decorateHtmlResponse(), userRouter);

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(err);
  });
  // fallback route
  app.get("*", function (req: Request, res: Response) {
    res.render("404");
  });
}
