import { RouterStorage } from "../core";

export function Get(route?: RegExp, options?): Function;

export function Get(route?: string, options?): Function;

export function Get(route?: string | RegExp, options?): Function {
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
