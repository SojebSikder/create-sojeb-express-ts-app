import { RouterStorage } from "../core";

export function Controller(baseRoute?: string): Function {
  return function (object: Function) {

    RouterStorage.controllers.push({
      type: "default",
      target: object,
      route: baseRoute,
    });

    // getMetadataArgsStorage().controllers.push({
    //   type: 'default',
    //   target: object,
    //   route: baseRoute,
    //   options,
    // });
  };
}
