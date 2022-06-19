import { RouterStorage } from "../core";

export function Delete(route?: RegExp): Function;

export function Delete(route?: string): Function;

export function Delete(route?: string | RegExp): Function {
  return function (object: Object, methodName: string) {
    RouterStorage.actions.push({
      type: "delete",
      target: object.constructor,
      method: methodName,
      route,
    });
  };
}
