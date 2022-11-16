// external imports
import express, { Express } from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
// internal imports
// middleware imports
import { rootResolver } from "../graphql/resolvers";
import { schema } from "../graphql/schema";
import { logger } from "../app/middlewares/logger";
import bodyParser from "body-parser";
import { appConfig } from "../config/app";
import { staticConfig } from "../config/static";

/**
 * Use any middleware here
 */
export function boot(app: Express) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser(appConfig.cookieSecret));
  // cors
  if (appConfig.security.cors.enable) {
    app.use(cors(appConfig.security.cors.options));
  }
  // helmet
  if (appConfig.security.helmet.enable) {
    app.use(helmet(appConfig.security.helmet.options));
  }
  // view
  app.use(express.static(staticConfig.staticDir));
  if (staticConfig.engine.enable) {
    app.set("view engine", staticConfig.engine.viewEngine);
    app.set("views", staticConfig.engine.viewsDir);
  }

  // custom middleware here
  app.use(logger);
  // graphql endpoint
  app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      rootValue: rootResolver,
      graphiql: true,
    })
  );
}
