import { RouterStorage } from "../core";

/**
 * Route handler (method) Decorator. Routes HTTP PUT requests to the specified path.
 * @param route
 * @param options
 * @author Sojeb Sikder <sojebsikder@gmail.com>
 */
export function Put(route?: string, options?): Function {
  return function (object: Object, methodName: string) {
    RouterStorage.actions.push({
      type: "put",
      target: object.constructor,
      method: methodName,
      options,
      route,
    });
  };
}
