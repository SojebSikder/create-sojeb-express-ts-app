// external imports
import http from "http";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
//
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

// internal imports
import { config } from "./config/app";
import { routes } from "./router";
import env from "./util/env";

// middleware
import { logger } from "./middlewares/logger";
import { PostService } from "./controllers/post/post.service";

// initialize
dotenv.config();
const app = express();
app.disable('x-powered-by');
const server = http.createServer(app);

// socket creation
const io = new Server(server);
global.io = io;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(env("COOKIE_SECRET")));

// GraphQL schema
const schema = buildSchema(`
type Query {
  posts: [Post]
},
type Post{
  id: Int
  title: String
  content: String
}
`);

// Root resolver
const root = {
  posts: async () => {
    const controller = new PostService();
    return controller.index();
  },
};

// custom middleware
app.use(logger);
// graphql endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

//routes
routes(app);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
