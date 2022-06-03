import env from "../system/util/env";

export const config = {
  port: env("PORT", "3000"),
};
