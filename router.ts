// external imports
import { Express, Request, Response } from "express";

// internal imports
import postRouter from "./routes/postRouter";
import userRouter from "./routes/userRouter";
// middleware
import { decorateHtmlResponse } from "./middlewares/common/decorateHtmlResponse";
import { attachmentUpload } from "./middlewares/common/upload";
import { Data } from "./models/Data";

/**
 * Init all routes
 * @param {*} app
 */
export function routes(app: Express) {
  // just for test
  app.get("/test", async function (req, res) {
    // const result = new Data();
    // result.title = "sojeb";
    // result.text = "hello sikder";
    // await result.save();

    const data = await new Data().all();
    res.json({ data });
  });

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
