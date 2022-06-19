import { RouterStorage } from "../core";

export function Put(route?: RegExp): Function;

export function Put(route?: string): Function;

export function Put(route?: string | RegExp): Function {
  return function (object: Object, methodName: string) {
    RouterStorage.actions.push({
      type: "put",
      target: object.constructor,
      method: methodName,
      route,
    });
  };
}
