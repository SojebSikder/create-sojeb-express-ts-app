import { RouterStorage } from "../core";

export function Post(route?: RegExp, options?): Function;

export function Post(route?: string, options?): Function;

export function Post(route?: string | RegExp, options?): Function {
  return function (object: Object, methodName: string) {
    RouterStorage.actions.push({
      type: "post",
      target: object.constructor,
      method: methodName,
      options,
      route,
    });
  };
}
