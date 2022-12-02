// external imports
import { Express, Request, Response } from "express";
// internal imports
// middleware
import { AppModule } from "../app/controllers/app.module";

/**
 * Init all routes
 * @param {*} app
 */
export function routes(app: Express) {
  // Initialize modules
  new AppModule();
  /**
   * User custom router here
   */

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(err);
  });
  // fallback route
  app.get("*", function (req: Request, res: Response) {
    res.render("404");
  });
}
