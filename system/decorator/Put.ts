import { RouterStorage } from "../core";

export function Put(route?: RegExp, options?): Function;

export function Put(route?: string, options?): Function;

export function Put(route?: string | RegExp, options?): Function {
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
