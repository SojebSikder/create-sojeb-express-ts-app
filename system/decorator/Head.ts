import { RouterStorage } from "../core";

/**
 * Route handler (method) Decorator. Routes HTTP HEAD requests to the specified path.
 * @param route
 * @param options
 * @author Sojeb Sikder <sojebsikder@gmail.com>
 */
export function Head(route?: string, options?): Function {
  return function (object: Object, methodName: string) {
    RouterStorage.actions.push({
      type: "head",
      target: object.constructor,
      method: methodName,
      options,
      route,
    });
  };
}
