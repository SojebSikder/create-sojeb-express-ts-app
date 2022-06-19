import { Express } from "express";
import { RouterStorage } from "./RouterStorage";

/**
 * RouterResolver used to resolve route
 */
export class RouterResolver {
  /**
   * Resolve router
   * @param app Express
   */
  public static resolve(app: Express) {
    const controller = RouterStorage.controllers;
    const action = RouterStorage.actions;

    for (const [controllerKey, controllerValue] of Object.entries(controller)) {
      const controller = new controllerValue.target();
      // if controller has not route specified
      if (!controllerValue.route) {
        for (const [methodKey, methodValue] of Object.entries(action)) {
          if (controllerValue.target == methodValue.target) {
            app[methodValue.type](
              `/${methodValue.route}`,
              controller[methodValue.method]
            );
          }
        }
      } else {
        for (const [methodKey, methodValue] of Object.entries(action)) {
          if (controllerValue.target == methodValue.target) {
            app[methodValue.type](
              `${controllerValue.route}/${methodValue.route}`,
              controller[methodValue.method]
            );
          }
        }
      }
    }
  }
}
