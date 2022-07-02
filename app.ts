// external imports
import http from "http";
import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
import cors from "cors";
// graphql imports
// import { graphqlHTTP } from "express-graphql";
// import { buildSchema } from "graphql";
// internal imports
import { appConfig } from "./config/app";
import { routes } from "./routes/web";
// middleware imports
import { logger } from "./app/middlewares/logger";

// initialize
dotenv.config();
const app = express();
app.disable("x-powered-by");
const server = http.createServer(app);
// socket creation
const io = new Server(server);
global.io = io;

app.use(cors());
app.use(helmet());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(appConfig.cookieSecret));

// GraphQL schema
// const schema = buildSchema(`
// type Query {
//   posts: [Post]
// },
// type Post{
//   id: Int
//   title: String
//   content: String
// }
// `);
// // Root resolver
// const root = {
//   posts: async () => {
//     const controller = new PostService();
//     return controller.index();
//   },
// };

// // custom middleware
app.use(logger);
// // graphql endpoint
// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true,
//   })
// );

//routes
routes(app);

// run server
server.listen(appConfig.port, () => {
  console.log(`Server is running on port ${appConfig.port}`);
});

export default server;
