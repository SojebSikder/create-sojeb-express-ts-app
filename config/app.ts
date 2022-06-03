import { env } from "../system/util";

export const config = {
  port: env("PORT", "3000"),
};
