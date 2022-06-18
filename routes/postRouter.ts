import express from "express";
import { PostController } from "../app/controllers/post/post.controller";

import { decorateHtmlResponse } from "../app/middlewares/common/decorateHtmlResponse";

const router = express.Router();
const controller = new PostController();

router.get("/", decorateHtmlResponse(), controller.index);
router.get("/post/add", decorateHtmlResponse(), controller.showAddPostPage);
router.post("/post/add", decorateHtmlResponse(), controller.store);
router.get("/post/:id", decorateHtmlResponse(), controller.show);

export default router;
