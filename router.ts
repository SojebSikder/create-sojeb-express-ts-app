// external imports
import { Express, Request, Response } from "express";

// internal imports
import postRouter from "./routes/postRouter";
import userRouter from "./routes/userRouter";
// middleware
import { decorateHtmlResponse } from "./middlewares/common/decorateHtmlResponse";
import { attachmentUpload } from "./middlewares/common/upload";

/**
 * Init all routes
 * @param {*} app
 */
export function routes(app: Express) {
  // just for test
  app.get(
    "/upload",
    decorateHtmlResponse(),
    async (req: Request, res: Response) => {
      res.render("upload");
    }
  );
  app.post("/upload", attachmentUpload, async (req: Request, res: Response) => {
    try {
      res.send("uploaded: " + req.files);
    } catch (error) {
      res.send(error);
    }
  });
  // end test
  app.use(postRouter);
  app.use(decorateHtmlResponse(), userRouter);

  app.get("*", function (req: Request, res: Response) {
    res.render("404");
  });
}
