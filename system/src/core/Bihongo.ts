// external imports
import http from "http";
import dotenv from "dotenv";
import { Server } from "socket.io";
// internal imports
import { ExpressAdapter } from "./Framework/ExpressAdapter";

/**
 * Bihongo is another name of this boilarplate core.
 */
export class Bihongo {
  private static _app;

  /**
   * Initialize app.
   */
  static app({ frameworkAdapter = new ExpressAdapter(), boot, routes }) {
    // initialize
    dotenv.config();
    // const app = frameworkAdapter.app();
    this._app = frameworkAdapter.app();

    if (frameworkAdapter instanceof ExpressAdapter) {
      // express
      this._app.disable("x-powered-by");
    }

    const server = http.createServer(this._app);
    // socket creation
    const io = new Server(server);
    global.io = io;

    // initialize middleware
    boot(this._app);
    //routes
    routes(this._app);

    return server;
  }
}
