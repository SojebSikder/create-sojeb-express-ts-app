import { RouterStorage } from "../core";

/**
 * Route handler (method) Decorator. Routes HTTP GET requests to the specified path.
 * @param route
 * @param options
 * @author Sojeb Sikder <sojebsikder@gmail.com>
 */
export function Get(route?: string, options?): Function {
  return function (object: Object, methodName: string) {
    RouterStorage.actions.push({
      type: "get",
      target: object.constructor,
      method: methodName,
      options,
      route,
    });
  };
}
