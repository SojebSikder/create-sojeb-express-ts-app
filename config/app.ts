import env from "../util/env";

export const config = {
  port: env("PORT", "3000"),
};
