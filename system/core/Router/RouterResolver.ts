import express, { Express } from "express";
import { RouterStorage } from "./RouterStorage";

// Initialize express router
const router = express.Router();
/**
 * RouterResolver used to resolve route
 */
export class RouterResolver {
  static controller = RouterStorage.controllers;
  static action = RouterStorage.actions;

  /**
   * Resolve router
   * @param app Express
   */
  public static resolve(app: Express) {
    const controller = this.controller;
    const action = this.action;

    for (const [controllerKey, controllerValue] of Object.entries(controller)) {
      const controllerObject = new controllerValue.target();

      for (const [methodKey, methodValue] of Object.entries(action)) {
        if (controllerValue.target == methodValue.target) {
          // if controller has not route specified
          if (!controllerValue.route) {
            router[methodValue.type](
              `${methodValue.route}`,
              controllerObject[methodValue.method]
            );
          } else {
            router[methodValue.type](
              `${controllerValue.route}${methodValue.route}`,
              controllerObject[methodValue.method]
            );
          }

          // if controller has route specified
          if (controllerValue.options != null) {
            const { middleware } = controllerValue.options || {};
            app.use(middleware, router);
          }
          // if method has middleware
          if (methodValue.options != null) {
            const { middleware } = methodValue.options || {};
            app.use(middleware, router);
          } else {
            app.use(router);
          }
        }
      }
    }
  }
}
